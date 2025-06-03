import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badges from "./components/Badges"

function App() {
  return (
    <>
      <Badges />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
