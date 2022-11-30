import { Navigate } from "react-router-dom"

type Props = {
  showBackButton?: boolean
  items: {
    icon: React.ReactElement,
    label: string,
    onClick: () => void
  }[]
}

export default function Header (props:Props) {

  return (
    <div className="Header">
      {props.showBackButton && (
        <button>back</button>
      )}

      {props.items.map(item => (
        <div key={item.label} onClick={item.onClick}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

const l = (
  <Header
    showBackButton
    items={[
      {
        icon: <span/>,
        label: 'User',
        onClick: () => navigate('/account')
      }
    ]}
  />
)