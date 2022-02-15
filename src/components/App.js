import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {

  const [name, setName] = useState("Body");
  setTimeout(() => {
    setName("Suraj");
  }, 2000);

  return (
    <div className="App">
      <Header />
      { name }
      <Footer />
    </div>
  );
}

export default App;
