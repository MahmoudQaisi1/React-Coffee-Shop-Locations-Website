import './App.css';
import SimpleMap from './simple-map';
import CardSection from './card-section';
import locations from './locations';
import { useRef } from 'react';

function App() {
  const locationsRef = useRef([]);

  const scrollToLocation = (index) => {
    if (locationsRef.current[index]) {
      locationsRef.current[index].scrollIntoView({ behavior: 'smooth', block: "end"});
      locationsRef.current[index].style.backgroundColor = '#d9d2b4';
      setTimeout(()=>{
        locationsRef.current[index].style.backgroundColor = '#FFF7D4';
      },700);
    }
  };

  return (
    <div className="App">
      <SimpleMap locations={locations} scrollToLocation={scrollToLocation}/>
      <CardSection locations={locations} locationsRef={locationsRef}/>
    </div>
  );
}

export default App;
