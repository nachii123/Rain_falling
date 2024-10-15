import './App.css';
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <h1>Welocome</h1>
      <div className="centerApp">
      <Grid rows={15} cols={15} />

      </div>
      
   
    </div>
  );
}

export default App;
