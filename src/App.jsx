import { useState, createContext} from 'react'
import styles from './styles/App.module.css'
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Dates from './components/Dates.jsx';
import Videos from './components/Videos.jsx';
import Contact from './components/Contact.jsx';
import { Outlet, RouterProvider } from "react-router"

// export const AppContext = createContext({
//
// })

function App() {

  return (
    <app className={styles.app}>
      <Nav className={styles.main}/>
      <main className={styles.main}>
        <Home/>
        <Dates/>
        <Videos/>
        <Contact/>
      </main>


    </app>
  )
}

export default App
