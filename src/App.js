import React from 'react'
import AppRouter from './AppRouter';

// styles
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (<section className='main-app-container'><AppRouter /></section>)
}

export default App