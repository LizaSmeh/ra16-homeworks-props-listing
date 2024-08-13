import Listing from './components/listing';
import items from '../data/etsy.json';
import './App.css'

function App() {
    return (
      <Listing items={items}/>
  )
}

export default App
