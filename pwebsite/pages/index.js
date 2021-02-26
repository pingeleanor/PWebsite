import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import  Footer from '../components/footer';
import Layout from "../components/layout";
import {getNavigations} from "../lib/getNavigations";
import {getConfigs} from "../lib/getConfigs";
import Link from 'next/link'
import NavigationCard from "../components/navigationCard";
export default function Home({configs,navigations}) {
  return (
      <Layout home configs={configs}>
        <h1 className={styles.title}>
          Welcome to my website !
        </h1>

        <p className={styles.description}>
            {configs.description}
        </p>

      <NavigationCard navigations={navigations}></NavigationCard>
          </Layout>

  )
}
export async function getStaticProps() {
    const navigations = getNavigations();
    const configs = getConfigs();
    return {
        props: {
          navigations,
            configs
        }
    }

}
