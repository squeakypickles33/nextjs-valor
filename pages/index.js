import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import styles from '../components/layout.module.css';
import styles2 from '../styles/Home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={styles2.container}>
        <div className={styles2.grid}>
          <Link href="/quote" className={styles2.card}>
            <h3>Free Quote &rarr;</h3>
            <p>Find in-depth information about your personalized system.</p>
          </Link>
          <Link href="/contact" className={styles2.card}>
            <h3>Contact Us &rarr;</h3>
            <p>Find in-depth information about teaming up with Valor.</p>
          </Link>
        </div>
      </main>
      <section className={styles.header}>
        <p>Hi, my name is Derek Williams, a savvy full stack developer! Link up boo</p>
        <p>
          (This is a sample website - I’ll be building a site like this on{' '}
          <a href="https://www.safestreets.com/get-a-free-quote/">ValorSecurity.com</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.header}`}>
        <ul className={utilStyles.list}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li className={utilStyles.listItem}>
            <Link href="/posts/first-post">First Post</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2023-12-28'}/>
            </small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/movies">Top 20 Movies</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2023-12-28'}/>
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
