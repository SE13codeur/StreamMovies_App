import React from 'react'
import '../styles/QuickView.scss'
import CancelIcon from '@material-ui/icons/Cancel'

const QuickView = ({ bannerStyle, movie, handleClickPopup, popupStatut }) => {
    return (
        <div className={`quickView ${popupStatut && 'open'}`}>
            <div className='quickView__banner'>
                <div className='quickView__content'>
                    <h3 className='quickView__title'>title</h3>
                    <p>Lorem</p>
                </div>
                <button className='quickView__close' onClick={handleClickPopup}>
                    <CancelIcon />
                </button>
            </div>
            
        </div>
    )
}

export default QuickView
