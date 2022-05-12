import React, { useState, useEffect, useRef, useCallback } from 'react'
import Card from './Card'
import axios from 'axios'
import SearchInput from './SearchInput'
import NextPrevBtn from './NextPrevBtn'

const Main = (props) => {
  const { history } = props
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(apiUrl)
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokeDex, setPokeDex] = useState()
  const [sortName, setSortName] = useState(false)
  const [sortHeight, setSortHeight] = useState(false)
  const [sortWeight, setSortWeight] = useState(false)
  const [search, setSearch] = React.useState('')

  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false)
  }

  const setPagination = useCallback(
    (i) => {
      setPokeData([])
      if (i === 10) {
        setUrl('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      } else if (i === 50) {
        setUrl('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      } else {
        setUrl('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      }
    },
    [url],
  )

  const sortByName = () => {
    setPokeData([])
    setSortName(true)
  }
  const sortByWeight = () => {
    setPokeData([])
    setSortWeight(true)
  }
  const sortByHeight = () => {
    setPokeData([])
    setSortHeight(true)
  }
  const setfilter = (e) => {
    setSearch(e.target.value)
  }
  const goNext = () => {
    setPokeData([])
    setUrl(nextUrl)
  }
  const goPrev = () => {
    setPokeData([])
    setUrl(prevUrl)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData((state) => {
        state = [...state, result.data]
        if (sortName) {
          state.sort((a, b) => (a.name > b.name ? 1 : -1))
        } else if (sortWeight) {
          state.sort((a, b) => (a.weight > b.weight ? 1 : -1))
        } else if (sortHeight) {
          state.sort((a, b) => (a.height > b.height ? 1 : -1))
        } else {
          state.sort((a, b) => (a.id > b.id ? 1 : -1))
        }
        return state
      })
    })
  }
  const filltered = !search
    ? pokeData
    : pokeData.filter((poked) =>
        poked.name.toLowerCase().includes(search.toLowerCase()),
      )
  
  const mounted = useRef()

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      pokeFun()
    }
  }, [url, sortName, sortHeight, sortWeight])

  return (
    <>
      <div className="main">
        <nav>
          <SearchInput search={search} setSearch={setfilter} />
          <button data-testid="sortname" onClick={sortByName}>
            Sort by Name
          </button>
          <button data-testid="sortByHeight" onClick={sortByHeight}>Sort by Height</button>
          <button data-testid="sortByWeight" onClick={sortByWeight}>Sort by Weight</button>
          <button data-testid="10page" onClick={() => setPagination(10)}>10 Per Page</button>
          <button data-testid="20page" onClick={() => setPagination(20)}>20 Per Page</button>
          <button data-testid="50page" onClick={() => setPagination(50)}>50 Per Page</button>
        </nav>
        <NextPrevBtn
          prevUrl={prevUrl}
          nextUrl={nextUrl}
          goNext={goNext}
          goPrev={goPrev}
        />
        <ul className="cards">
          <Card
            pokemon={filltered}
            loading={loading}
            pokeres={pokeDex}
            infoPokemon={(poke) => setPokeDex(poke)}
            onClick={() => history.push(`/${pokeData.id}`)}
          />
        </ul>

        <NextPrevBtn
          prevUrl={prevUrl}
          nextUrl={nextUrl}
          goNext={goNext}
          goPrev={goPrev}
        />
      </div>
    </>
  )
}
export default Main
