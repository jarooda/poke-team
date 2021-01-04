import React from 'react'
import Poke from '../components/Poke'

class Container extends React.Component {
  constructor () {
    super()
    this.state = {
      pokemons: null
    }
  }

  componentDidMount() {
    this.fetchPoke()
  }

  fetchPoke = () => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=809')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemons: data.results
        })
    })
  }
  
  render() {
    const {pokemons} = this.state
    return (
      <div className="sm:w-10/12 w-full grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2 p-2">
        {
          !pokemons
          ?
          <p>Loading...</p>
          :
          pokemons.map((poke, idx) => {
            return (
              <Poke key={idx} poke={poke} />
            )
          })
        }
      </div>
    )
  }
}

export default Container