import "./NetflixSeries.css";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "../components/SeriesCard";

function NetflixSeries() {
  return (
    <ul className=" ul grid">
      {seriesData.map((currEle) => (
        <SeriesCard data={currEle} key={currEle.id} />
      ))}
    </ul>
  );
}

export default NetflixSeries;
