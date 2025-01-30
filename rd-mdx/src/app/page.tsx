import styles from "./page.module.css";
import Welcome from "@/content/welcome.mdx";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World!</h1>
        <Welcome />
      </main>
    </div>
  );
}
