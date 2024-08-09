import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./contexts/MovieProvider";

function App() {
  const [cartoon, setCartoon] = useState([]);
  const [singleMovies, setSingleMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");

  // Handle search in searchbar
  // https://phimapi.com/v1/api/tim-kiem?keyword={Từ khóa}&limit={number}
  const handleSearch = async (searchVal) => {
    try {
      const urlSearch = `https://phimapi.com/v1/api/tim-kiem?keyword=${searchVal}`;
      const response = await fetch(urlSearch, options);
      const data = await response.json();
      setMovieSearch(data?.data?.items);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Fetch movie single
  const url1 = "https://phimapi.com/v1/api/danh-sach/phim-le";
  const url2 = "https://phimapi.com/v1/api/danh-sach/hoat-hinh";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setSingleMovies(data1?.data.items);
      setCartoon(data2?.data?.items);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-10">
      <MovieProvider>
        <Header onSearch={handleSearch}></Header>
        <Banner></Banner>
        {movieSearch.length > 0 ? (
          <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
        ) : (
          <>
            <MovieList title={"Phim Lẻ"} data={singleMovies}></MovieList>
            <MovieList title={"Phim Hoạt Hình"} data={cartoon}></MovieList>
          </>
        )}
      </MovieProvider>
    </div>
  );
}

export default App;
