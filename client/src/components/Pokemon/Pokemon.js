import './Pokemon.css';

const Pokemon = ({ id, image, name, types }) => {

    return (
        <div key={id} className='pokemon'>

            <div className="pokemon-img">
                <img src={image} alt={name}/>
            </div>
            <div className="pokemon-info">
                <h3>{name}</h3>
                <div className="pokemon-type">
                    { types && types.map( t => {
                        return (
                            <span key={t}>{t}</span>
                        )
                    })}
                </div>
            
            </div>

        </div>
    )

}

export default Pokemon;