import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Container from './pages/Container'
import PokeDetail from './pages/PokeDetail'

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <div className="flex container mx-auto flex-wrap sm:flex-nowrap sm:mt-3">
        {/* <Container /> */}
        <PokeDetail />
        <Sidebar />
      </div>
      <Footer />
      </>
    )
  }
}

export default App;
