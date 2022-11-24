import * as React from 'react'

export const Context = React.createContext<string | null>(null)

type Props = {
  children: React.ReactElement
}

export function SloganProvider (props:Props) {
  const [slogan, setSlogan] = React.useState<string | null>(null)

  React.useEffect(() => {
    getSlogan().then(result => {
      setSlogan(result)
    })
  }, [])

  return (
    <Context.Provider value={slogan}>
      {props.children}
    </Context.Provider>
  )
}

export default function useSlogan() {
  return React.useContext(Context)
}

async function getSlogan () {
  await new Promise(r => setTimeout(r, 2000))
  return 'React-Hooks ' + Math.random()
}