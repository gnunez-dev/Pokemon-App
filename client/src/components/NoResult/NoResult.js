import React from 'react'
import ImgNoResult from '../../img/no-result.svg'
import './NoResult.css'


const NoResult = () => {

    return(
        <div className='cont-no-result'>

            <img src={ImgNoResult} className='img-no-result' alt='No Results Found'/>
            <h2>no results found</h2>

        </div>
    )

}

export default NoResult