import React from 'react'

class Poke extends React.Component {
  constructor () {
    super()
    this.state = {
      details: null
    }
  }

  componentDidMount() {
    fetch(this.props.poke.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data
        },() => {
          console.log(this.state.details);
        })
      })
  }

  getColor = (type) => {
    switch (type) {
      case 'normal':
        return <div className="bg-normal type"><p>normal</p></div>
      case 'fire':
        return <div className="bg-fire type"><p>fire</p></div>
      case 'water':
        return <div className="bg-water type"><p>water</p></div>
      case 'electric':
        return <div className="bg-electric type"><p>electric</p></div>
      case 'grass':
        return <div className="bg-grass type"><p>grass</p></div>
      case 'ice':
        return <div className="bg-ice type"><p>ice</p></div>
      case 'fighting':
        return <div className="bg-fighting type"><p>fighting</p></div>
      case 'poison':
        return <div className="bg-poison type"><p>poison</p></div>
      case 'ground':
        return <div className="bg-ground type"><p>ground</p></div>
      case 'flying':
        return <div className="bg-flying type"><p>flying</p></div>
      case 'psychic':
        return <div className="bg-psychic type"><p>psychic</p></div>
      case 'bug':
        return <div className="bg-bug type"><p>bug</p></div>
      case 'rock':
        return <div className="bg-rock type"><p>rock</p></div>
      case 'ghost':
        return <div className="bg-ghost type"><p>ghost</p></div>
      case 'dragon':
        return <div className="bg-dragon type"><p>dragon</p></div>
      case 'dark':
        return <div className="bg-dark type"><p>dark</p></div>
      case 'steel':
        return <div className="bg-steel type"><p>steel</p></div>
      case 'fairy':
        return <div className="bg-fairy type"><p>fairy</p></div>
      default:
        return <div>Belum ada color</div>
    }
  }

  render() {
    const { details } = this.state
    return (
      !details
      ?
      <p>...</p>
      :
      <div className="border-2 border-white hover:border-gray-200 p-2 w-full flex items-start h-56 justify-center rounded shadow-md">
        <div>
          <p className="capitalize text-center font-semibold">{details.species.name}</p>
          <img src={ details.sprites.front_default} className="hover:animate-bounce" alt={details.species.name}/>
          {
            details.types.map((type, idx) => {
              return <div key={idx}>{this.getColor(type.type.name)}</div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Poke