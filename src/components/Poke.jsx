import Type from './Type'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'

function Poke (props) {
  const { data: pokemon, loading } = useFetch(props.poke.url)

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="border-t-4 border-red-400 dark:border-blue-400 dark:hover:border-blue-200 hover:border-red-200 p-2 w-full flex items-start h-60 justify-center rounded shadow-md">
      <div>
        <p className="capitalize text-center font-semibold link">{pokemon.species.name}</p>
        <img src={ pokemon.sprites.front_default} className="hover:animate-bounce" alt={pokemon.species.name}/>
        {
          pokemon.types.map((type, idx) => {
            return <Type key={idx} type={type.type.name} />
          })
        }
      </div>
    </div>
  )
}

export default Poke