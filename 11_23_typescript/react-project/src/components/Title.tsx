import * as React from 'react'

type Props = {
  headline: string
  subtitle: string
}

export default function Title (props:Props) {
  const [counter, setCounter] = React.useState(0)

  const incrementCounter = () => {
    setCounter(counter+1)
  }

  return (
    <div className='Title'>
      <h1>{props.headline}</h1>
      <p>{props.subtitle}</p>
      <button onClick={incrementCounter}>{counter}</button>
    </div>
  )
}