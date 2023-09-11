import React from 'react'
import Input from '../Input/Input';
import './Formulario.css';

let arrayKey = ['551', '552', '553', '554', '555', '556', '557', '558', '559', '5510']
const Formulario = ({formulario, errors, checked, handleChange, handleCheckbox, typesPokemons, validateSubmint, errorSubmint}) =>{
 return(
    <div className='cont-form'>
        <form onSubmit={validateSubmint}>
                        
        <Input
            key={arrayKey[0]}
            label='Name'
            type='text'
            name='name'
            value={formulario.name}
            error={errors.name}
            handleChange={handleChange}
        />
        <Input
            key={arrayKey[1]}
            label='Imagen'
            type='text'
            name='image'
            value={formulario.image}
            error={errors.image}
            handleChange={handleChange}
        />
        <Input
            key={arrayKey[2]}
            label='Life'
            type='number'
            name='hp'
            value={formulario.hp}
            error={errors.hp}
            handleChange={handleChange}
        />
        <Input
            key={arrayKey[3]}
            label='Attack'
            type='number'
            name='attack'
            value={formulario.attack}
            error={errors.attack}
            handleChange={handleChange}
        />

        <Input
            key={arrayKey[4]}
            label='Defense'
            type='number'
            name='defense'
            value={formulario.defense}
            error={errors.defense}
            handleChange={handleChange}
        />

        <Input
            key={arrayKey[5]}
            label='Speed'
            type='number'
            name='speed'
            value={formulario.speed}
            error={errors.speed}
            handleChange={handleChange}
        />
        
        <Input
            key={arrayKey[6]}
            label='Height'
            type='number'
            name='height'
            value={formulario.height}
            error={errors.height}
            handleChange={handleChange}
        />
        
        <Input
            key={arrayKey[7]}
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
                        <div key={`tt${t.id}`} className="item-types">
                            <input 
                                type="checkbox"
                                name="types"
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