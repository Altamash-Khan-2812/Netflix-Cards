import NetflixSeries from "./components/NetflixSeries";
import "./index.css";
import styles from "./components/Netflix.module.css";

function App() {
  return (
    <section className="container">
      <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
}

export default App;
