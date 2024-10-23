import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // Capitalize component names
  // All components have to return some JSX — that's it
  return (
    <div>
      <h1 className="testClass">Submit your fav links!</h1>

      <form>
        <label htmlFor="linkName">Link Name</label>
        <input type="text" name="linkName" />
        <br />
        <label htmlFor="linkURL">Link URL</label>
        <input type="text" name="linkURL" />
      </form>

      <table>
      </table>
    </div>
  );
}


export default App
