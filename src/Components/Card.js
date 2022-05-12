import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon &&
        pokemon.map((item,index) => {
          return (
            <>
              <li data-testid={`card-item-${index}`}  className="cards_item" key={item.id}>
                <div className="card_main card_content">
                  <div className="card_image">
                    <img
                      src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                      alt={item.name}
                    />
                  </div>
                  <table className="bordered card-table ">
                    <tbody className="card_title">
                      <tr>
                        <td>{item.id}</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{item.height}</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{item.weight}</td>
                      </tr>
                      <tr>
                        <td>Abilities:</td>
                        <td>
                          {' '}
                          {item.abilities.map((poke) => {
                            return (
                              <>
                                <div key={poke.id}>{poke.ability.name}</div>
                              </>
                            )
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to={`/Pokemon/${item.id}`}>
                    <button className="btn">Show Details</button>
                  </Link>
                </div>
              </li>
            </>
          )
        })
      )}
    </>
  )
}
export default Card
