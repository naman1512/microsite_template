import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1 className={styles.title}>Welcome to the Page</h1>
      <footer className={styles.footer}>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}
