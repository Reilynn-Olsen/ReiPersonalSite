import React, { useEffect } from 'react';
import './css/App.css';
import Header from './Header';
import Welcome from './Welcome';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  useEffect(() => {
    document.title = "Reilynn's Website";
  }, []);
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
