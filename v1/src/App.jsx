import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="bg-dark min-h-screen text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
