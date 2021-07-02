import Row from "./components/Row";
import requests from "./requests";
import "./App.css";
function App() {
  return (
    <div className="App">
      {requests.map((e) => (
        <Row key={e.url} data={e} />
      ))}
    </div>
  );
}

export default App;
