import './Filter.css';

const Filter = ({label, name, options, handleChange, selected  }) => {

    return(
        <div className="item-filter">
            <label>{label}</label>
            <select onChange={ (e) => handleChange(e)} name={name} value={selected}>
                {
                    options && options.map( op => {
                        return (

                            name === 'Types'
                            ? 
                            <option key={`${op.id}-${op.name}`} value={op.name}>{op.name}</option>
                            :
                            <option key={`${op.value}-${op.name}`} value={op.value}>{op.name}</option>
                        )
                    })
                }
                
            </select>
        </div>
    )
}

export default Filter;