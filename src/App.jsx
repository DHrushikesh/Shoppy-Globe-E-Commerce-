import './App.css'
import Header from './Components/Header'
import { Outlet } from "react-router-dom"
import { Provider } from 'react-redux'
import appStore from './assets/appstore.js'

function App() {

  return (
    <>
    <Provider store={appStore}>
      <Header/>
      <Outlet/>
    </Provider>
    </>
  )
}

export default App
