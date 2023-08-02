import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Sightings } from './components/Sightings/Sightings';
import { fetchSightings } from './apiCalls';



function App() {

  const [sightings, setSightings] = useState([])

  useEffect(() => {
    fetchSightings().then(data => {
      setSightings(data)
    })
  }, [])

  return (
    <div className="App">
      <h1 className='title'>First Contact</h1>
      <Form setSightings={setSightings} sightings={sightings} />
      <Sightings setSightings={setSightings} sightings={sightings} />
    </div>
  );
}

export default App;
