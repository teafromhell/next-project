import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat Burgers | Main</title>
        <meta name="title" content="Fat Burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fat burger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>Ideal burgers</p>
        <Link href="/burgers">
          <a className={styles.btn}>All burgers</a>
        </Link>
      </div>
    </>
  );
}
