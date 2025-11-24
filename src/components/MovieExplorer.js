import React, { Suspense, lazy } from 'react';
import SearchMovie from './SearchMovie';
import ErrorBoundary from './ErrorBoundary';
const MovieList = lazy(() => import('./MovieList'));

function MovieExplorer() {
  const [movies, setMovies] = React.useState([]);

  return(
    <div>
      <h1 className="movie-explorer-heading">Movie Explorer App</h1>
      <ErrorBoundary>
        <SearchMovie onSearchResult={setMovies } />
      </ErrorBoundary>
      {
        movies.length > 0 ? (
          <ErrorBoundary>
            <Suspense fallback={<p className="loading">Loading movies...</p>}>
              <MovieList movies={movies} />
            </Suspense>
          </ErrorBoundary>
        ) : <p className="no-movies">No movies found</p>
      }
    </div>
  )
}

export default MovieExplorer;
