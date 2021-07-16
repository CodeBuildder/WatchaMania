import "./App.css";
import Row from "./Components/Row";
import BigBan from "./Components/Banner";
import Navbar from "./Components/Navbar";
import apiRequest from "./api/api";
function App() {
  return (
    <div className="app">
      <Navbar />
      <BigBan />
      <Row
        title="NETFLIX ORIGINALS"
        url={apiRequest.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" url={apiRequest.fetchTrending} />
      <Row title="Top Rated" url={apiRequest.fetchTrending} />
      <Row title="Crime Movies" url={apiRequest.fetchActionMovies} />
      <Row title="Comedy Movies" url={apiRequest.fetchComedyMovies} />
      <Row title="Drama Movies" url={apiRequest.fetchHorrorMovies} />
      <Row title="Romance Movies" url={apiRequest.fetchRomanceMovies} />
      <Row title="Documentaries" url={apiRequest.fetchDocumentaries} />
    </div>
  );
}

export default App;
