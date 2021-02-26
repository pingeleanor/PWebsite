import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import  Footer from '../components/footer';
import Layout from "../components/layout";
import {getNavigations} from "../lib/getNavigations";
import Link from 'next/link'
import NavigationCard from "../components/navigationCard";
export default function Home({navigations}) {
  return (
      <Layout home>
        <h1 className={styles.title}>
          Welcome to my website !
        </h1>

        <p className={styles.description}>
          Web designer & Developer & C# Developer
        </p>

      <NavigationCard navigations={navigations}></NavigationCard>
          </Layout>

  )
}
export async function getStaticProps() {
    const navigations = getNavigations()
    return {
        props: {
          navigations
        }
    }

}
