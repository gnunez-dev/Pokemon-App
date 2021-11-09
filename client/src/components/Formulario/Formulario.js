import Input from '../Input/Input';
import './Formulario.css';

const Formulario = ({formulario, errors, checked, handleChange, handleCheckbox, typesPokemons, validateSubmint, errorSubmint}) =>{
 return(
    <div className='cont-form'>
        <form onSubmit={validateSubmint}>
                        
        <Input
            key='1Inp'
            label='Name'
            type='text'
            name='name'
            value={formulario.name}
            error={errors.name}
            handleChange={handleChange}
        />
        <Input
            key='2Inp'
            label='Imagen'
            type='text'
            name='image'
            value={formulario.image}
            error={errors.image}
            handleChange={handleChange}
        />
        <Input
            key='3Inp'
            label='Life'
            type='number'
            name='hp'
            value={formulario.hp}
            error={errors.hp}
            handleChange={handleChange}
        />
        <Input
            key='4Inp'
            label='Attack'
            type='number'
            name='attack'
            value={formulario.attack}
            error={errors.attack}
            handleChange={handleChange}
        />

        <Input
            key='5Inp'
            label='Defense'
            type='number'
            name='defense'
            value={formulario.defense}
            error={errors.defense}
            handleChange={handleChange}
        />

        <Input
            key='6Inp'
            label='Speed'
            type='number'
            name='speed'
            value={formulario.speed}
            error={errors.speed}
            handleChange={handleChange}
        />
        
        <Input
            key='7Inp'
            label='Height'
            type='number'
            name='height'
            value={formulario.height}
            error={errors.height}
            handleChange={handleChange}
        />
        
        <Input
            key='8Inp'
            label='Weight'
            type='number'
            name='weight'
            value={formulario.weight}
            error={errors.weight}
            handleChange={ handleChange }
        />
        

        <div className='cont-types'>
            <label>Types</label>
            {
                typesPokemons && typesPokemons.map( t => {
                    return (
                        <div className="item-types">
                            <input 
                                type="checkbox"
                                name="types"
                                key={t.id}
                                id={t.id}
                                value={t.id}
                                onChange={ (e) => handleCheckbox(e) }
                                checked={checked[t.id]}
                                />
                            <label htmlFor={t.id}>
                                {t.name}
                            </label>
                        </div>
                        )
                })
            }

            {
                errors.types && (
                <p className='error-form'>{errors.types}</p>
                )
            }

        </div>
        {
            errorSubmint && <p className='error-form'>{errorSubmint}</p>
        }
        <button className='btn'>Create</button>
        </form>
    </div>
 )
}

export default Formulario;