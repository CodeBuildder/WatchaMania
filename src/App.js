import "./App.css";
import apiRequests from "./api/api";
import Row from "./Components/Row";
import apiRequest from "./api/api";
function App() {
  return (
    <div className="App">
      Hey
      <Row title="NETFLIX ORIGINALS" url={apiRequest.fetchNetflixOriginals} />
      <Row title="Trending Now" url={apiRequest.fetchTrending} />
    </div>
  );
}

export default App;
