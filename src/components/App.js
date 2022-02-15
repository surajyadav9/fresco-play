import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {

  const [name, setName] = useState("Body");

  // Update state of name after 2 second
  // illusion of fething data from server
  setTimeout(() => {
    setName("Suraj");
  }, 2000);

  return (
    <div className="App">
      <Header />
      <p>{ name }</p>
      <Footer />
    </div>
  );
}

export default App;
