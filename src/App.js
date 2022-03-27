import './App.css';
import Container from 'react-bootstrap/Container';
import WeatherApp from './components/WeatherApp'
import BarTop from './components/BarTop'

function App() {
  return (
    <div className="App">
      <BarTop/>
      <Container>
        <WeatherApp/>
      </Container>
    </div>
  );
}

export default App;
