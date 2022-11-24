import axios, { AxiosResponse } from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

type UserHook = {
  user: null | {
    name: string
    email: string
  }
  register: (email:string, password:string, name:string) => Promise<boolean>
  login: (email:string, password:string) => Promise<boolean>
  logout: () => void
}

export default function useUser ():UserHook {
  return {
    user: null,
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
      return false
    },
    logout: async () => {

    }
  }
}