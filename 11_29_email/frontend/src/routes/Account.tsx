import './Account.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import useRecords from "../hooks/useRecords"
import useUser from "../hooks/useUser"

export default function Account () {
  const user = useUser()
  //  const user = useContext(userContext)
    const records = useRecords()

if(user.loading) return null

  if(!user.user) {
    return (
      <div>
        <h1>you are not logged in</h1>
        <Link to='/login'>zum Login</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Records</h1>
      <label htmlFor="min">Min</label>
      <input 
        id="min" 
        type="number" 
        onChange={(e) => records.setMin(Number(e.target.value))} 
        value={records.min} />
      
      <label htmlFor="max">Max</label>
      <input 
        id="max" type="number" 
        onChange={(e) => records.setMax(Number(e.target.value))} 
        value={records.max} />

      <label htmlFor="band">Band</label>
      <input 
        id="band" 
        type="text"
        onChange={(e) => records.setBand(e.target.value)}
        value={records.band}
        />
    <div className="gallery">
      {
        records.list.map((el) => {
          return(
            <div key={el._id} className="card">
              <h5>{el.band}</h5>
              <h3>{el.title}</h3>
              <p>{el.price}</p>

            </div>
          )
        })
      }

    </div>
    </div>
  )
}