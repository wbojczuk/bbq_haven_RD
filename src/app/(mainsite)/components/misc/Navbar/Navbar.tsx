"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)
  const isHomePage: any = useRef()
  isHomePage.current = false


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const contactRef: any = useRef()
  const cateringRef: any = useRef()
  const photosRef: any = useRef()
  const menuRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()
  const pathRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/photos"],
      ref: photosRef
    },
    {
      triggers: ["/catering"],
      ref: cateringRef
    },
    {
      triggers: ["/menu"],
      ref: menuRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    }
    
  ]

  const pathname = usePathname()
  

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
    if(["/", "/home"].includes(pathname) && !isOnTouch){
      isHomePage.current = true
      if(window.scrollY < 50){
        navRef.current.classList.remove(styles.animed)
      }
    }else{
      isHomePage.current = false
      navRef.current.classList.add(styles.animed)
    }
    pathRef.current = pathname
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)
    
    if(window.scrollY > 50){
      navbarAnimIn()
    }else{
      navbarAnimOut()
    }

    window.addEventListener("scroll", ()=>{
      if(["/", "/home"].includes(pathRef.current)){
        isHomePage.current = true
      }else{
        isHomePage.current = false
      }
      if(window.scrollY > 50){
        navbarAnimIn()
      }else{
        navbarAnimOut()
      }
    })

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])

  function navbarAnimIn(){
   if(isHomePage.current){
    navRef.current.classList.add(styles.animed)
   }
  }

  function navbarAnimOut(){
    if(isHomePage.current){
      navRef.current.classList.remove(styles.animed)
    }
  }


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--spring"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav ref={navRef} className={styles.mainNav}>

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img src="/img/logo.webp" className={styles.logoImg} width={500} height={250} alt="Logo" />
        {/* <span>logo text</span> */}
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          ref={homeRef}
          />
          <NavOption
          title="Menu"
          url="/menu"
          ref={menuRef}
          />

          <NavOption
          title="Photos"
          url="/photos"
          ref={photosRef}
          />

          <NavOption
          title="About"
          url="/about"
          ref={aboutRef}
          />

        

          {/* <NavOption
          title="Store"
          url="/products"
          ref={storeRef}
          /> */}

<NavOption
          title="Catering"
          url="/catering"
          ref={cateringRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          ref={contactRef}
          />
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
