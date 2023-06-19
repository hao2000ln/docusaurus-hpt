import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <h1 className="hero__title">Bộ giải pháp CSEP</h1>
        <p className="hero__subtitle">GIẢI PHÁP QUẢN LÝ TÀI SẢN TẬP TRUNG</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://demoqlts.hpt.vn/sm/index.do">
            Phần mềm QLTS &#36;
          </Link>
          {/* <a
            className="button button--secondary button--lg"
            href="/HPT-SCEP.pdf"
            download="HPT-SCEP.pdf"
          >Tải xuống tài liệu docx 🡇</a> */}
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Chào mừng bạn đến với ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
