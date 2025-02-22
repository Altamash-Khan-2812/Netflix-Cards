import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, genre, cast, watch_url, description } =
    data;

  const ratingClass = rating >= 8.5 ? styles["super-hit"] : styles.average;
  const ratingHoverClass =
    rating >= 8.5 ? styles["super-hit-hover"] : styles["average-hover"];

  const btn_style = {
    fontSize: "1.6rem",
    padding: "1.2rem 2.4rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    border: "none",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  };

  // const Button = styled.button`
  //   color: green;
  // `;

  // const Button = styled.button({
  //   color: "white",
  //   backgroundColor: "red",
  // });
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} className={styles["series-card-img"]} />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name : {name}</h2>
        <h3 className={styles.rating}>
          rating :
          <span className={`${styles["rating-score"]} ${ratingClass}`}>
            {" "}
            {rating}
          </span>
        </h3>

        <p>summary: {description}</p>

        <p>Genre : {genre.join(", ")}</p>

        <p>Cast : {cast.join(", ")}</p>

        <a href={watch_url} target="_blank">
          <button style={btn_style} className={ratingHoverClass}>
            Watch now
          </button>
        </a>
      </div>
    </li>
  );
};
