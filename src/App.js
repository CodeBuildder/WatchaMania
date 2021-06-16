import "./App.css";
import Row from "./Components/Row";
import apiRequest from "./api/api";
function App() {
  return (
    <div className="App">
      Hey
      <Row
        title="NETFLIX ORIGINALS"
        url={apiRequest.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" url={apiRequest.fetchTrending} />
      <Row title="Top Rated" url={apiRequest.fetchTrending} />
      <Row title="Action Movies" url={apiRequest.fetchActionMovies} />
      <Row title="Comedy Movies" url={apiRequest.fetchComedyMovies} />
      <Row title="Horrow Movies" url={apiRequest.fetchHorrorMovies} />
      <Row title="Romance Movies" url={apiRequest.fetchRomanceMovies} />
      <Row title="Documentaries" url={apiRequest.fetchDocumentaries} />
    </div>
  );
}

export default App;
