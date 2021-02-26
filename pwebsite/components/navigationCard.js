import styles from './navigationCard.module.css'
import Link from "next/link";

export default function NavigationCard({navigations}) {
    return <div className={styles.grid}>
        {navigations.map((navi,i)=>{
            return <Link href={`navigations/${navi.params.id}`} key={i} >
                <a className={styles.card}>
                    <h3>More about {navi.params.id} <i className={"fa fa-arrow-right"}></i></h3>
                </a>
            </Link>
        })}
    </div>
}