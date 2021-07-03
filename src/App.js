import Row from "./components/Row";
import requests from "./requests";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {requests.map((e) => (
        <Row key={e.url} data={e} />
      ))}
    </div>
  );
}

export default App;
