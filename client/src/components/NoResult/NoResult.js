import ImgNoResult from '../../img/no-result.svg'
import './NoResult.css'


const NoResult = () => {

    return(
        <div className='cont-no-result'>

            <img src={ImgNoResult} className='img-no-result'/>
            <h2>no results found</h2>

        </div>
    )

}

export default NoResult