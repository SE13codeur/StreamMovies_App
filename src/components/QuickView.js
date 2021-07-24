import React from 'react'
import '../styles/QuickView.scss'
import CancelIcon from '@material-ui/icons/Cancel'

const QuickView = ({ bannerStyle, movie, handleClickPopup, popupStatut }) => {
    return (
        <div className={`quickView ${popupStatut && 'open'}`}>
            <div className='quickView__banner'style={bannerStyle}>
                <div className='quickView__content'>
                    <h3 className='quickView__title'>
                        {movie?.title || movie?.name || movie?.original_title}
                    </h3>
                    <p>{movie?.overview}</p>
                </div>
                <button className='quickView__close' onClick={handleClickPopup}>
                    <CancelIcon fontSize='large'/>
                </button>
            </div>
            
        </div>
    )
}

export default QuickView
