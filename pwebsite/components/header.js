import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'



export default function Header({configs}) {
    const name = configs&&configs.name?configs.name :"user"
    const siteTitle = `${name}'s website`
    return <div>
        <Head>
            <link rel="icon" href="/images/logo_title.png" />
            <meta
                name="description"
                content="my private website"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
    <header className={styles.header}>
        <>
            <Image
                priority
                src={configs&&configs.name?configs.name=="Ping"? "/images/profile.jpg":"/images/chris.jpg" :"/images/profile.jpg"}
                className={styles.borderCircle}
                height={150}
                width={150}
                alt={name}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
        </>
    </header>
    </div>
}