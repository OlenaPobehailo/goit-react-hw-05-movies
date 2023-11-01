import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "services/api";

const Home = ({ movies }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => setTrendingMovies(data));
  }, []);

  console.log(trendingMovies);

  return (
    <div className="container">
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;