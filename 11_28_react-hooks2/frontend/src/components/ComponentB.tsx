import useSlogan from "../hooks/useSlogan"


export default function ComponentB () {
  const slogan = useSlogan()
  
  if(slogan === null) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <h2>{slogan}</h2>
  )
}