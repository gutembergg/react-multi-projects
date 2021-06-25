import React from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Routes from './routes'
import { GlobalStyles } from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <Routes />

      <GlobalStyles />
    </>
  )
}

export default App
