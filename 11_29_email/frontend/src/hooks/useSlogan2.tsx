import * as React from 'react'


export default function useSlogan2 () {
  const [slogan, setSlogan] = React.useState<string | null>(null)

  React.useEffect(() => {
    getSlogan().then(result => {
      setSlogan(result)
    })
  }, [])

  return slogan
}

async function getSlogan () {
  await new Promise(r => setTimeout(r, 2000))
  return 'React-Hooks ' + Math.random()
}