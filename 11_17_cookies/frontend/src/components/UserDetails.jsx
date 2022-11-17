import * as React from 'react'
import './UserDetails.css'

export default function UserDetails ({token}) {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    fetch('http://localhost:3001/user',{
      headers: {
        'x-authorization': token
      }
    }).then(async response => {
      if(response.status === 200) {
        const user = await response.json()
        setUser(user)
      }
      else if(response.status === 401) {
        setIsLoggedIn(false)
      }
      else {
        setHasError(true)
      }
      setLoading(false)
    })
  }, [token])

  if(loading) return (
    <div className='UserDetails'>
      <h3>loading...</h3>
    </div>
  )

  if(!isLoggedIn) return (
    <div className='UserDetails'>
      <h3>Du bist nicht eingeloggt</h3>
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
    </div>
  )
}