import { Card, CardContent } from '@mui/material';
import './App.css';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  return (
    <div className="app">
    <div className="app__left">
      <Header />
      <div className="app__stats">
        <InfoBox title='Coronavirus Cases' cases={123} total={200}/>
        <InfoBox title='Recovered' cases={123} total={200}/>
        <InfoBox title='Deaths' cases={123} total={200}/>
      </div>
      <Map />
    </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
