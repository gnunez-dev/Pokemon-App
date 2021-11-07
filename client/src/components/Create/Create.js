import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from '../../actions/index';
import Container from '../Container/Container';
import Input from "../Input/Input";
import './Create.css';


const Create = () => {

    let inicialStateFormulario = {
        name: "",
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        height: null,
        weight: null,
        types: [] 
    }
    let errorInicialState = {
        name: null,
        image: null,
        hp:null,
        attack:null,
        defense:null,
        speed:null,
        height:null,
        weight:null,
        types:null,
    }
    let [formulario, setFormulario ] = useState(inicialStateFormulario);
    let dispatch = useDispatch();
    let typesPokemons = useSelector( state => state.allTypes ) 
    let [errors, setErrors] = useState(errorInicialState)


    let errorValidate = {
        name: {
            condition: formulario.name.length < 3 ,
            msg: 'Debe completar este campo, debe contener por lo menos 3 letras'
        },
        image: {
            condition: !/^(ftp|http|https):\/\/[^ "]+$/.test(formulario.image),
            msg: 'Debe completar este campo, debe contener una url'
        },
        hp: {
            condition: formulario.hp < 0,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        attack: {
            condition: formulario.attack < 0,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        defense: {
            condition: formulario.defense < 0,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        speed: {
            condition: formulario.speed < 0,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        height: {
            condition: formulario.height < 0,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        weight: {
            condition: formulario.weight < 0 ,
            msg: 'Este campo es requerido, debe tener un valor como minimo de 1'
        },
        types: {
            condition: formulario.types.length === 0,
            msg: 'Este campo es requerido, debes seleccionar por lo menos un tipo de pokemon'
        },

    }


    const validate = (formulario, e) => {

        if( !formulario[e.target.name] || errorValidate[e.target.name].condition) {

            errors[e.target.name] = errorValidate[e.target.name].msg
           
        } else {
            errors[e.target.name] = ''
        }
       
    }

    const validateSubmint = ( e ) => {
        e.preventDefault();
        let validation = 0;

        for (const key in formulario) {

            if ( typeof formulario[key] === 'array' ) {
                
                if( formulario[key].length === 0 ){
                    errors.types = errorValidate.types.msg
                    validation++;
                } else {
                    errors.types = ''
                }
                
            } else {

                if( !formulario[key] ){
                    errors[key] = errorValidate[key].msg
                    validation++;
                } else {
                    errors[key] = ''
                }

            }

        }

        if( validation === 0 ){

            handleSubmint(e)
            console.log( 'validation0', {validate, errors})
            
        } else {
            setErrors(errors)
            console.log( 'validationE', {validate, errors})
        }


    }

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch] )

    const handleSubmint = (e) => {
        e.preventDefault();
        dispatch(createPokemon(formulario))
        setFormulario(inicialStateFormulario);
    }

    const handleChange = (e) => {

        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })

        validate({
            ...formulario,
            [e.target.name] : e.target.value
        }, e);

        setErrors(errors)

    } 
    
    const handleCheckbox = (e) => {
        if(e.target.checked){
            setFormulario({
                ...formulario,
                types: [...formulario.types, e.target.value]
            })
        }

        validate({
            ...formulario,
            [e.target.name] : e.target.value
        }, e);

        setErrors(errors)

    }

  
    
    return (
        <div className="cont-create">
            <Container>
                
                <form onSubmit={validateSubmint}>
                    
                    <Input
                        label='Name'
                        type='text'
                        name='name'
                        value={formulario.name}
                        error={errors.name}
                        handleChange={handleChange}
                    />
                    <Input
                        label='Imagen'
                        type='text'
                        name='image'
                        value={formulario.image}
                        error={errors.image}
                        handleChange={handleChange}
                    />
                    <Input
                        label='Life'
                        type='number'
                        name='hp'
                        value={formulario.hp}
                        error={errors.hp}
                        handleChange={handleChange}
                    />
                    <Input
                        label='Attack'
                        type='number'
                        name='attack'
                        value={formulario.attack}
                        error={errors.attack}
                        handleChange={handleChange}
                    />
                
                    <Input
                        label='Defense'
                        type='number'
                        name='defense'
                        value={formulario.defense}
                        error={errors.defense}
                        handleChange={handleChange}
                    />
                
                    <Input
                        label='Speed'
                        type='number'
                        name='speed'
                        value={formulario.speed}
                        error={errors.speed}
                        handleChange={handleChange}
                    />
                    
                    <Input
                        label='Height'
                        type='number'
                        name='height'
                        value={formulario.height}
                        error={errors.height}
                        handleChange={handleChange}
                    />
                    
                    <Input
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
                                    <label className="item-types">
                                        <input 
                                            type="checkbox"
                                            name="types"
                                            key={t.id}
                                            value={t.id}
                                            onChange={ (e) => handleCheckbox(e) }
                                            />
                                        {t.name}

                                        <br/>
                                    </label>
                                    )
                            })
                        }

                        {
                            errors.types && (
                               <p className='error-form'>{errors.types}</p>
                            )
                        }

                    </div>
                    <button className={ errors ? `btn-desactive` : `btn-act`}>Crear</button>
                </form>
            </Container>
        </div>
    )
}



export default Create;