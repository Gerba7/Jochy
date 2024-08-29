import styles from "./page.module.css";
import Banner from "./ui/components/Home/Banner/Banner";
import Cover from "./ui/components/Home/Cover/Cover";
import Cover2 from "./ui/components/Home/Cover2/Cover2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <Banner />
      <Cover2 />
    </main>
  );
}
