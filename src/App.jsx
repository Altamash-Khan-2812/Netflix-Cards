import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";

function App() {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
}

export default App;
