import '../styles/App.scss'

import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Row from '../components/Row'
import Requests from '../data/Requests'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Route } from 'react-router'
 

import Movie from '../components/Movie'

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact='/'>
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
      </Router>

    </div>
  )
}

export default App
