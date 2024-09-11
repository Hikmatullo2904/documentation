import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{width: "100%", display: "flex", justifyContent:"center", margin: "10rem 0"}}>
      <Link
            style={{fontSize: "100px", textAlign: "center"}}
            to="/docs/intro">
            Documentation
      </Link>
      
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
