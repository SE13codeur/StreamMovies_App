import React from 'react'
import '../styles/Movie.scss'

import { useParams } from 'react-router'

const Movie = () => {
    let { id } = useParams()

    return (
        <div className='movie'>
            <iframe
                src='https://www.justwatch.com'
                title='movie'
                frameBorder='0'
                allowFullScreen
            >
            </iframe>
            
        </div>
    )
}

export default Movie
