import * as React from 'react'
import './Register.css'

export default function Register (props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const [registered, setRegistered] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState(null)

  const submit = async (e) => {
    e.preventDefault()


    const response = await fetch('http://localhost:3001/user/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password, email, avatar: imagePreview})
    })


    if(response.status === 200) {
      setRegistered(true)
    }
    else if(response.status === 400) {
      const result = await response.json()
      // result = [{password:'password too weak'}]
      const errors = []
      for(const row of result.message) {
        // {password:'password too weak'}
        for(const key in row) {
          // key: password
          errors.push(row[key])
        }
      }
      setErrors(errors)
    }
    else {
      setErrors(['Etwas ist schief gelaufen'])
    }
  }

  // Bilddatei in Base64 String umwandeln
function fileHandle(e){
 
  // aus File us input auswählen
  const selectedImg = e.target.files[0]
  if (!selectedImg) return
  
  // umwandeln mit Filereader
  let fileReader = new FileReader()
  fileReader.readAsDataURL(selectedImg)
  fileReader.onloadend = (event) => {
    console.log(event)
   
  //   
    setImagePreview(fileReader.result)
  }
}




  if(registered) {
    return (
      <h1>Wilkommen</h1>
    )
  }

  return (
    <form className='Register' onSubmit={submit}>
      <h3>Registrieren</h3>
      <input type='text' placeholder='Name...' value={name} onChange={e => setName(e.target.value)}/>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <label htmlFor='avatarId'>
        <h5 style={{cursor: 'pointer'}}>Lad mich hoch</h5>
        <input type="file" onChange={fileHandle} accept='image/*' name='avatar' id='avatarId' style={{visibility: 'hidden'}} />
      </label>
      
      <button type='submit'>Absenden</button>
      {errors.map(error => (
        <div key={error} className='error'>{error}</div>
      ))}
      <label className='login-switch' onClick={props.onLoginSwitch}>Ich habe bereits einen Account</label>
      { imagePreview && <img src={imagePreview} alt="dasVorschaubild" />} 
    </form>
  )
}