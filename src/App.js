import React from 'react';
import About from './components/about';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
			<Home />
      <About />
			<Contact />
			<Footer />
    </div>
  );
}

export default App;
