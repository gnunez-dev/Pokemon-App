const { Router } = require('express');
const {getPokemons, getPokemonById, getPokemonByName, createPokemon, getPokemonsRelated} = require('../routes/utils')


const router = Router();



router.get('/:id', async (req, res, next) => {

    if(!req.params) return next();

    try {
        let {id} = req.params; 
        let pokemon = await getPokemonById(id);
        console.log('ruta', {pokemon})
        res.send( pokemon )

    } catch (error) {
        res.status(500).json({msg: 'error ruta', error})   
    }
    
})

//
router.get('/', async (req, res, next) => {

    if(!req.query.name) return next();

    try {
        let {name} = req.query; 
        console.log('try name', name)
        let pokemon = await getPokemonByName(name);
        console.log('ruta', {pokemon})
        res.send( pokemon )

    } catch (error) {
        res.status(500).json({msg: 'error ruta', error})   
    }
    
})

router.get('/', async (req, res) => {

    try {

        let pokemon = await getPokemons(req.query.from);
        res.send( pokemon )
    } catch (error) {
        res.status(500).json({msg: 'error ruta', error})   
    }
    
})

router.post('/', async (req, res) =>{
    
    try{

        let newPokemon = await createPokemon(req.body);
        if(!newPokemon) return res.status(400).json({msg:'error, por favor vuelve a intentarlo'})
        res.send(newPokemon)

    } catch(error){

        return res.status(400).json({msg:'error, por favor vuelve a intentarlo', error})

    }

});

router.get('/related/:id', async(req, res) => {
    console.log('ruta related', req.params)
    try{

        let {id} = req.params;
        let related = await getPokemonsRelated(id)
        console.log('ruta', {related})
        res.send(related)

    } catch(error){
        res.status(500).json({msg: 'error ruta', error}) 
    }

})

module.exports = router;