"use client"
import styles from "./cateringcontent.module.css"
import Link from "next/link"

export default function CateringContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/catering.png"} width={360} height={600} alt="Image of food truck" />
        </div>
        

        <div className={styles.content}>
            <h2>Catering</h2>

            <p>At BBQ Haven, we bring the heart and soul of our food truck to your events, specializing in weddings, birthdays, graduations, and small parties with mouth-watering flavors and exceptional service. Our catering menu features hot, fresh, and generously sized portions with two delicious sides, and we can customize it to meet your event's unique tastes. We love serving our community, preferring to stay local but love to travel for a small additional charge, ensuring a memorable dining experience that will have your guests coming back for seconds.
            </p>
            <Link href="/contact" className="main-link main-link-outline">Contact</Link>
        </div>
    </section>
  )
}
