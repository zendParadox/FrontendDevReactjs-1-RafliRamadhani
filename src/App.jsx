import './App.css'
import Navbar from '../src/assets/components/Navbar.jsx'
import Header from '../src/assets/components/Header.jsx'
import Card from '../src/assets/components/Card.jsx'
import LoadMore from './assets/components/LoadMore.jsx'

function App() {
  return (
    <>
    <div className="container grid">
      <div className="col-6">
        <Header />
      </div>
    <Navbar />

    <div className="content">
      <div className="row">
            <Card />
      </div>
    </div>
    </div>
    </>
    
  )

}

export default App