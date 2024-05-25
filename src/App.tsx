import { useEffect, useState } from 'react'
import styles from './App.module.css'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  const [pok, setPok] = useState<Array<{name: string}>>([])
  useEffect(() => {
    async function GetPokemon () {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon')
      const res = await data.json()
      setPok(res.results)
    }
    GetPokemon()
  }, [])
  console.log(pok)

  return (
    <>
      <div className={styles.PokemonListCard}>
        {pok.map(el => <PokemonList key={el.name} pok={el} />)}
      </div>
        <PokemonDetails/>
    </>
  )
}

export default App
