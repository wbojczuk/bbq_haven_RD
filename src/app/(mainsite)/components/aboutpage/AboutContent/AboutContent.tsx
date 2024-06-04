"use client"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/about.png"} width={360} height={600} alt="Image of food truck" />
        </div>
        

        <div className={styles.content}>
            <h2>About Us</h2>

            <p>We are a local BBQ Food Truck that caters Hot, Fresh, and Great tasting food to your events. We serve custom menus that will make your guests want more. Reach out and let us handle the flavor!
            </p>
            <Link href="/contact" className="main-link main-link-outline">Contact</Link>
        </div>
    </section>
  )
}
