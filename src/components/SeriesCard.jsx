export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, genre, cast, watch_url, description } =
    data;

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  const ratingHoverClass = rating >= 8.5 ? "super_hit_hover " : "average_hover";

  const btn_style = {
    fontSize: "1.6rem",
    padding: "1.2rem 2.4rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    border: "none",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  };
  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} className="series-card-img" />
      </div>
      <div className="card-content">
        <h2>Name : {name}</h2>
        <h3 className="rating">
          rating :
          <span className={`rating_score ${ratingClass}`}>{rating}</span>
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
