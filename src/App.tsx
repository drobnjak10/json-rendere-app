import "./App.css";
import Row from "./components/Row";
import { useData } from "./context/Context";

function App() {
  const { state } = useData();
  const { data } = state;

  return (
    <div className="App">
      {data.length > 0 &&
        data.map((item) => {
          return <Row key={item._id} item={item} />;
        })}
    </div>
  );
}

export default App;
