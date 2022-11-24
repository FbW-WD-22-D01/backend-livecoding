import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import { SloganProvider } from './hooks/useSlogan'

function App() {

  return (
    <SloganProvider>
      <div className="App">
        <ComponentA/>
        <ComponentB/>
      </div>
    </SloganProvider>
  )
}

export default App
