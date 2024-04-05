import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.container}>
      <div className={styles.movie}>
        <div className={styles.movie_inner}>
          <Link className={styles.movie_link} to={`/movie/${id}`}>
            <img src={coverImg} alt={title} className={styles.movie_img} />
          </Link>
          <div className={styles.movie_content}>
            <h2 className={styles.movie_title}>
              <Link className={styles.movie_link} to={`/movie/${id}`}>
                {title}
              </Link>
            </h2>
            <p className={styles.movie_summary}>
              {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
            </p>
            <ul className={styles.movie_genres}>
              {genres.map((g, index) => (
                <li key={index} className={styles.genre}>
                  <a href="#" title="Movie Genres">
                    {g}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;