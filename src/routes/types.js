const { Router } = require('express');
const { getTypes } = require('../routes/utils')
const router = Router();

router.get('/', async (req, res) =>{
    
    try {

        let types = await getTypes();
        return res.send( types );

    } catch (error) {

        res.status(500).json({msg: 'error ruta', error})
        
    }

});

module.exports = router;