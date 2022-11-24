import axios, { AxiosResponse } from 'axios'
import * as React from 'react'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

type User = {
  name: string
  email: string
}

type UserHook = {
  user: null | User
  register: (email:string, password:string, name:string) => Promise<boolean>
  login: (email:string, password:string) => Promise<boolean>
  logout: () => void
}

export default function useUser ():UserHook {
  const [user, setUser] = React.useState<null | User>(null)

  React.useEffect(() => {
    axios.get('/user')
      .then(response => setUser(response.data))
      .catch(() => null)
  }, [])

  return {
    user: user,
    register: async (email, password, name) => {
      // fetch('http://localhost:3001/user/register', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password
      //   })
      // })
      const response:AxiosResponse<any,any> = await axios
        .post('/user/register', { email, password, name })
        .catch(e => e.response)
      
      if(response.status === 200) {
        return true
      }
      else {
        return false
      }
    },
    login: async (email:string, password:string) => {
      const response:AxiosResponse<any,any> = await axios
        .post('/user/login', { email, password })
        .catch(e => e.response)
      
      if(response.status === 200) {
        const user = await axios.get('/user')
        setUser(user.data)
        return true
      }
      else {
        return false
      }
    },
    logout: async () => {

    }
  }
}