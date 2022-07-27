import React, { useState} from 'react';
import Education from './Education';
import Work from './Work';
import './App.css';

function App() {
  
  interface BasicInfoComponent {
    name: string;
    phone: string;
    email: string;
  }

  const [basicInfo, setBasicInfo] = useState<BasicInfoComponent>(
    {name: 'Artur Akulenko', phone: '+37253092092', email: 'artur.akulenko@gmail.com'}
  )

  return (
    <div className="App-header">
      <h1>CV Times</h1>
      <Education/>
      <Work/>
    </div>
  );
}

export default App;
