import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function Footer() {
 return  <footer className={styles.footer}>
         Made with {" "} <i className="fa fa-heart" style={{color:"pink"}}></i> in Esslingen Germany
         {/*<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />*/}
 </footer>
}