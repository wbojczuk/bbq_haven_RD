"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Find(){
return (
 <div className={styles.find}>

    <h2>Find Out Where We’ll Be!</h2>

    <h3>Come and get some fresh smoked barbecue</h3>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>
 
    <img src='/img/find.webp' alt='Image of truck' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};