import {useState, useEffect} from 'react'
import '../styles/Row.scss'
import { Link } from 'react-router-dom'

import axios from 'axios'

const Row = ({ title, fetchUrl, isPoster }) => {
    const baseURL = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([])

     useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            
            <h2 className='row__title'>{title}</h2>    
            
            <div className='row__images'>
                {movies.map(movie => 
                    <div key={movie.id}>
                        <Link to={`/movie/${movie?.id}`}>
                            {isPoster ? (
                                <img
                                    src={`${baseURL}/${movie.poster_path}`}
                                    className='row__image'
                                    alt={movie?.title || movie?.name || movie?.original_title}
                                />
                            ) : (
                                <img
                                src={`${baseURL}/${movie.backdrop_path}`}
                                className='row__image'
                                alt={movie?.title || movie?.name || movie?.original_title}
                                />
                            )}
                        </Link>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Row
