import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Pokeinfo from './PokeInfo'

const BookDetailPage = ({ match }) => {
  const { pokeId } = useParams()
  const [book, setBook] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const API_BASE_URL = `https://pokeapi.co/api/v2/pokemon`
    const fetchBook = async () => {
      setLoading(true)
      setError(false)
      try {
        const result = await axios.get(`${API_BASE_URL}/${pokeId}`)
        setBook(result.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchBook()
  }, [pokeId])

  return (
    <>
      {loading && (
        <div style={{ color: `green` }}>
          loading POkeID detail for book ID: <strong>{pokeId}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
      {book && <Pokeinfo item={book} />}
    </>
  )
}

export default BookDetailPage
