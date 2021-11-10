import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from '../../actions/index';
import Container from '../Container/Container';
import Formulario from "../Formulario/Formulario";
import PokemonCreate from "../PokemonCreate/PokemonCreate"
import SweetAlert from 'react-bootstrap-sweetalert';
import './Create.css';


const Create = () => {

    let dispatch = useDispatch();
    let typesPokemons = useSelector( state => state.allTypes ) 

    let inicialStateFormulario = {
        name: "",
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
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

    let checkedInicialState = (typesPokemons) => {
        let obj = {}
        for(let i = 0; i<typesPokemons.length; i++){
            obj[typesPokemons[i].id] = false;
        }
        return obj
    }

    let [formulario, setFormulario ] = useState(inicialStateFormulario);
    
    let [errors, setErrors] = useState(errorInicialState);
    let [errorSubmint, setErrorSubmint] = useState('');
    let [showAlert, setShowAlert] = useState(false);
    let [checked, setchecked] = useState(checkedInicialState(typesPokemons));

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch] )


    
    let errorValidate = {
        name: {
            condition: formulario.name.length < 3 ,
            msg: 'You must complete this field, it must contain at least 3 letters',
            prev:'',
            next: 'image'
        },
        image: {
            condition: !/^(ftp|http|https):\/\/[^ "]+$/.test(formulario.image),
            msg: 'You must complete this field, it must contain a url',
            prev: 'name',
            next: 'hp'
        },
        hp: {
            condition: formulario.hp < 1,
            msg: 'This field is required, it must have a numeric value',
            prev: 'image',
            next: 'attack'
        },
        attack: {
            condition: formulario.attack < 1,
            msg: 'This field is required, it must have a numeric value',
            prev: 'hp',
            next: 'defense'
        },
        defense: {
            condition: formulario.defense < 1,
            msg: 'This field is required, it must have a numeric value',
            prev: 'attack',
            next: 'speed'
        },
        speed: {
            condition: formulario.speed < 1,
            msg: 'This field is required, it must have a numeric value',
            prev: 'defense',
            next: 'height'
        },
        height: {
            condition: formulario.height < 1,
            msg: 'This field is required, it must have a numeric value',
            prev: 'speed',
            next: 'weight'
        },
        weight: {
            condition: formulario.weight < 1 ,
            msg: 'This field is required, it must have a numeric value',
            prev: 'height',
            next: 'types'
        },
        types: {
            condition: formulario.types.length === 0,
            msg: 'This field is required, you must select at least one type of pokemon',
            prev: 'weight',
            next: ''
        },

    }


    const validate = (formulario, e) => {

        if( !formulario[e.target.name] || errorValidate[e.target.name].condition) {

            errors[e.target.name] = errorValidate[e.target.name].msg
           
        } else {
            errors[e.target.name] = ''
        }

        let prev = errorValidate[e.target.name].prev;
        let next = errorValidate[e.target.name].next;

        if(prev.length > 0 ){

            if( !formulario[prev] || errorValidate[prev].condition ){
                errors[prev] = errorValidate[prev].msg
            } else {
                errors[prev] = ''
            }

        }

        if( next.length > 0 ){

            if( !formulario[next] || errorValidate[next].condition ){
                errors[next] = errorValidate[next].msg
            } else {
                errors[next] = ''
            }
        
        }

       
    }

    const validateSubmint = ( e ) => {
        e.preventDefault();

        let validation = 0;

        for (const key in formulario) {

            if ( Array.isArray(formulario[key]) ) {
                
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
            
        } else {
            setErrors(errors);
            setErrorSubmint('Please complete all fields')
        }


    }

   

    const handleSubmint = (e) => {
        e.preventDefault();
        dispatch(createPokemon(formulario))
        setFormulario(inicialStateFormulario);
        setShowAlert(true);
        setchecked(checkedInicialState(typesPokemons));
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


        if( !e.target.checked){

            formulario.types = formulario.types.filter( t => t !== e.target.value )

            setFormulario({
                ...formulario,
                types: [...formulario.types ]
            })

            setchecked({...checked, [e.target.value] : false})

        } else {

            if(e.target.checked){

                
                setFormulario({
                    ...formulario,
                    types: [...formulario.types, e.target.value]
                })
                setchecked({...checked, [e.target.value] : true})

            }

            validate({
                ...formulario,
                [e.target.name] : e.target.value
            }, e);

            setErrors(errors)
        }
        
    }

  
    
    return (
        <div className="cont-create">

            <h1>Create a pokemon!</h1>
            <Container>

            

            <SweetAlert
                show={showAlert}
                title="It has been created successfully!"
                onConfirm={() => setShowAlert(false)}
            />

            <PokemonCreate
                formulario={formulario}
                typesPokemons={typesPokemons}
            />
                
            <Formulario 
                formulario={formulario}
                errors={errors}
                typesPokemons={typesPokemons}
                handleChange={handleChange}
                handleCheckbox={handleCheckbox}
                validateSubmint={validateSubmint}
                errorSubmint={errorSubmint}
                checked={checked}
            />
            </Container>
        </div>
    )
}



export default Create;