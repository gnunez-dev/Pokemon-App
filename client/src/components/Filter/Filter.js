import useFilter from '../../hooks/useFilter';
import './Filter.css';

const Filter = ({name, options, action, handlePaginate}) => {

    
    let [filter, handleChange] = useFilter('');


    return(
        <div key={name} className="item-filter">
            <label>{name}</label>
            <span>{filter}</span>
            <select onChange={ (e) => handleChange(e, action, handlePaginate)}>
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