"use client"
import styles from "./event.module.css"
import Link from "next/link"

export default function Event() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/event.webp"} width={360} height={600} alt="Image of barbecue" />
        </div>
        

        <div className={styles.content}>
            <h2>Make Your Next Event Stand Out!</h2>

            <p>Contact us and get our smoked barbecue at your next event. From our various meats, sides, and sandwiches, give  your guests a meal they won’t forget!
            </p>
            <Link href="/contact" className="main-link main-link-outline">Contact</Link>
        </div>
    </section>
  )
}
