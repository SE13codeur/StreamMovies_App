import '../styles/App.scss'

import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Row from '../components/Row'
import Requests from '../data/Requests'

function App() {

  
  return (
    <div className="App">
      
      <Nav />

      <Banner />

      <Row
        title='ORIGINAL'
        fetchUrl={Requests.fetchOriginalMovies}
        isPoster={true}
      />
      
      <Row
        title='TRENDS'
        fetchUrl={Requests.fetchTrending}
      />

      <Row
        title='TOP'
        fetchUrl={Requests.fetchTopRated}
      />

      <Row
        title='ACTION'
        fetchUrl={Requests.fetchActionMovies}
      />

      <Footer />
    
    </div>
  )
}

export default App
