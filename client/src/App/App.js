import '../styles/App.scss'

import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Row from '../components/Row'
import Requests from '../data/Requests'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom' 

import Movie from '../components/Movie'

function App() {

  return (
    <div className="App">
      
    
        <Switch>
          <Route exact path='/'>
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
          </Route>
          <Route path='/movie/:id' component={Movie} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      

    </div>
  )
}

export default App
