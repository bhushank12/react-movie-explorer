function MovieCard({ movie }) {
  return(
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <h3 className="movie-title">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
    </div>
  )
}

export default MovieCard;
