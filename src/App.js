import Row from "./components/Row";
import requests from "./requests";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      {requests.map((e) => (
        <Row key={e.url} data={e} />
      ))}
    </div>
  );
}

export default App;
