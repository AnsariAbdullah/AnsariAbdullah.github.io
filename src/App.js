import React from 'react';
import About from './components/about';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';
import Blog from './components/blog';

function App() {
  return (
    <div className="App">
			<Home />
      <About />
			<Blog />
			<Contact />
			<Footer />
    </div>
  );
}

export default App;
