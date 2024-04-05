import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      );
      const data = await response.json();
      setMovies(data.data.movies);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loading_page}>
          <h1>Loading...&#127916;</h1>
        </div>
      ) : (
        <>
          <div className={styles.home_header}>
            <h2 className={styles.home_header_left}>
              Movies with a rating of 9.0 or higher &#127942;
            </h2>
          </div>
          <div className={styles.home_align}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;