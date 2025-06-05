import styles from "./Netflix.module.css";

export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, genre, cast, watch_url, description } =
    data;

  const ratingColor = rating >= 8.5 ? "#85dd94" : "#ffe589";

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} className={styles["series-card-img"]} />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name : {name}</h2>
        <h3 className={styles.rating}>
          rating :
          <span
            style={{ backgroundColor: ratingColor }}
            className={styles["rating-highlight"]}
          >
            {" "}
            {rating}
          </span>
        </h3>

        <p>summary: {description}</p>

        <p>Genre : {genre.join(", ")}</p>

        <p>Cast : {cast.join(", ")}</p>

        <a href={watch_url} target="_blank">
          <button
            className={`${
              rating >= 8.5 ? styles["super-hit"] : styles["average"]
            }`}
          >
            Watch now
          </button>
        </a>
      </div>
    </li>
  );
};
