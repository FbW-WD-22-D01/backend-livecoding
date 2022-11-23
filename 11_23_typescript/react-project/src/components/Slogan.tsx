import * as React from 'react'

export default function Slogan () {
  const [slogan, setSlogan] = React.useState<null | string>(null)

  React.useEffect(() => {
    fetchSlogan().then(result => {
      setSlogan(result)
    })
  }, [])

  if(slogan === null) {
    return <p>loading...</p>
  }

  return <p>{slogan}</p>
}

async function fetchSlogan () {
  await new Promise(r => setTimeout(r, 2000)) // wait 2 seconds

  return 'Typescript Rocks'
}