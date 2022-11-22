import * as React from 'react'
import './UserDetails.css'

export default function UserDetails (props) {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    fetch('http://localhost:3001/user',{
      credentials: 'include',
    }).then(async response => {
      if(response.status === 200) {
        const user = await response.json()
        console.log(user)
        setUser(user)
      }
      else if(response.status === 401) {
        setLoggedIn(false)
      }
      else {
        setHasError(true)
      }
      setLoading(false)
    })
  }, [props.token])

  
  const logout = () => {
    fetch('http://localhost:3001/user/logout',{
        credentials: 'include',
      }).then(async response => {
    if(response.status === 200) {
        props.setLoggedIn(false)
      }
    })
  }

  if(loading) return (
    <div className='UserDetails'>
      <h3>loading...</h3>
    </div>
  )

 
  if(hasError) return (
    <div className='UserDetails'>
      <h3>Etwas ist schief gelaufen</h3>
    </div>
  )
  
  return (
    <div className='UserDetails'>
      <h3>User-Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar_url} width="300" alt="" />
      <button onClick={logout}>zum Logout</button>
    </div>
  )
}