import './App.css';
import Header from './components/Header';
import Albums from './components/Albums';

function App() {
  return (
    <div className="App">
      <Header title="Photo Albums" bg="violet"/>
      <Albums/>
    </div>      
  );
}

export default App;
