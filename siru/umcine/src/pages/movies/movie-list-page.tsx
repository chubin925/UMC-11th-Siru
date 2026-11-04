import "../../App.css";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";

export function MovieListPage() {
  return (
    <div>
      <h1 className="title">영화 목록</h1>
      <MovieGrid />
      <Pagination />
    </div>
  );
}
