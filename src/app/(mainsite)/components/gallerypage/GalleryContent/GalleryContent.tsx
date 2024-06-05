import styles from './gallerycontent.module.css';
import galleryImgs from '@/app/(mainsite)/data/galleryimgs';

export default function GalleryContent(){
    const galleryElems = galleryImgs.map((imgSrc, i)=>{
        return <img src={imgSrc} aria-hidden key={i} className={styles.img} />
    })
return (
 <div className={styles.galleryContent}>
    {galleryElems}
 </div>
)};