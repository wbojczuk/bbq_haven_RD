"use client"

import Link from 'next/link';
import styles from './taste.module.css';

export default function Taste(){
return (
 <div className={styles.taste}>

    <h2>Taste 20+ Years of experience in every bite</h2>

    <h3>Get Our Catering Today</h3>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link main-link-outline' href='/contact'>Contact</Link>
    </div>
 
    <img src='/img/bbq-chicken.png' alt='Image of barbecue' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};