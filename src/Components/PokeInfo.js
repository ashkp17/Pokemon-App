import { Link } from 'react-router-dom'
const PokeInfo = ({ item }) => {
  return (
    <>
      {!item ? (
        ''
      ) : (
        <div className="pokeinfo">
          <h2 className="header center">{item.name}</h2>
          <div className="card-details hoverable">
            <div className="card-stacked">
              <div className="card-content">
                <div className="left">
                  <img
                    src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                  />
                </div>
                <div className="right">
                  {' '}
                  <table className="bordered striped card_text">
                    <tbody>
                      <tr>
                        <td>ID:</td>
                        <td>
                          <strong>{item.id}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Name:</td>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Height:</td>
                        <td>
                          <strong>{item.height}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Weight:</td>
                        <td>
                          <strong>{item.weight}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td> Base Experience:</td>
                        <td>
                          <strong>{item.base_experience}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Order:</td>
                        <td>
                          <strong>{item.order}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="/">
                    <button className="details back">Main Page</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default PokeInfo
