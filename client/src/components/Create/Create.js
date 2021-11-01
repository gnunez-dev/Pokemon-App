import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from '../../actions/index'


const Create = () => {

    let inicialStateFormulario = {
        name: "",
        hp: 1,
        attack: 1,
        defense: 1,
        speed: 1,
        height: 1,
        weight: 1,
        types: [] 
    }

    let [formulario, setFormulario ] = useState(inicialStateFormulario);
    let dispatch = useDispatch();
    let typesPokemons = useSelector( state => state.allTypes ) 

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])

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
    } 
    
    const handleCheckbox = (e) => {
        if(e.target.checked){
            setFormulario({
                ...formulario,
                types: [...formulario.types, e.target.value]
            })
        }
    }
    
    return (
        <form onSubmit={handleSubmint}>
            <input
                type='text'
                name='name'
                value={formulario.name}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='hp'
                value={formulario.hp}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='attack'
                value={formulario.attack}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='defense'
                value={formulario.defense}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='speed'
                value={formulario.speed}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='height'
                value={formulario.height}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <input
                type='number'
                name='weight'
                value={formulario.weight}
                onChange={ (e) => handleChange(e) }
            /><br/>
            <div>

                {
                    //<label><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label><br>
                    typesPokemons && typesPokemons.map( t => {
                        return (
                            <label>
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

            </div>
            <button>Crear</button>
        </form>
    )
}


/* 

{
    "name": "test",
    "hp": 50,
    "attack": 20,
    "defense": 10,
    "speed": 52,
    "height": 55,
    "weight": 5,
    "types": ["2ceecd61-d555-4ab2-a10b-7cfdce40bdda","b0f82f1f-4949-479b-86f3-863535d682a0"]
}

*/

export default Create;