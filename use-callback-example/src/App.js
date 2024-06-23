import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Example from "./components/Example";

function App() {
  return (
    <div className="container">
      <div className="content p-5">
        <h1 className="text-center mb-4">useCallback Example</h1>
        <Example />
      </div>
    </div>
  );
}

export default App;
