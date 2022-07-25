import './App.css';
import Clock from './components/Clock';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Clock locale="bn-BD" /> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
