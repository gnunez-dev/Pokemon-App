import './Filter.css';

const Filter = ({label, name, options, handleChange }) => {

    return(
        <div key={name} className="item-filter">
            <label>{label}</label>
            <select onChange={ (e) => handleChange(e)} name={name}>
                {
                    options && options.map( op => {
                        return (

                            name === 'Types'
                            ? 
                            <option key={op.name} value={op.name}>{op.name}</option>
                            :
                            <option key={op.value} value={op.value}>{op.name}</option>
                        )
                    })
                }
                
            </select>
        </div>
    )
}

export default Filter;