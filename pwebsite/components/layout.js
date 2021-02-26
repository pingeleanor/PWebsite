import header from "./header";
import Footer from "./footer";
import styles from '../styles/Home.module.css'
import Header from "./header";
import Link from "next/link";

export default function Layout({children,home,configs}) {
    return   <div className={styles.container}>
        <Header configs={configs}></Header>
        {home? null: <> <Link href={"/"}><a><i className={"fa fa-home"}></i> back to home</a></Link> </>}

        <main className={styles.main}>{children}</main>
        <Footer></Footer>
    </div>

}