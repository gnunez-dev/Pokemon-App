import './Filter.css';

const Filter = ({name, options, handleChange}) => {
    return(
        <div key={name} className="item-filter">
            <label>{name}</label>
            <select onChange={ (e) => handleChange(e)}>
                {
                    options && options.map( op => {
                        return (

                            name === 'Types'
                            ? 
                            <option key={op.name} value={op.name}>{op.name}</option>
                            :
                            <option key={op.id} value={op.id}>{op.name}</option>
                        )
                    })
                }
                
            </select>
        </div>
    )
}

export default Filter;