import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return(
    <div className="movie-list">
      {
        movies.map((movie) => (
          <MovieCard key={movie.title + movie.year} movie={movie} />
        ))
      }
    </div>
  )
}

export default MovieList;
