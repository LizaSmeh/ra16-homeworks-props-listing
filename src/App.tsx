import Listing from './components/listing';
import items from './data/etsy.json'

function App() {
    return (
      <Listing items={items}/>
  )
}

export default App
