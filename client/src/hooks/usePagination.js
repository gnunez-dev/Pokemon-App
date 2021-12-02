import { useState } from 'react'

const usePagination = ( {pageNumber, pokemons, numberPerPage} ) => {

    //Configuramos la pagina actual con lo que nos pasen por parametro
    let [ currentPage, SetCurrentPage ] = useState(pageNumber);

    //Se establece que la cantiadad de pokemons que se mostraran por pagina seran 12
    let [ pokemonsPerPage ] = useState(numberPerPage);

    //Calculos para establecer desde donde hasta donde se mostraran los pokemons
    let indexOfLastPokemon = currentPage * pokemonsPerPage;
    let indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

    //con el slice, partimos el array que trae todos los pokemons dependiendo
    //de la cantidad por pagina y el numero de pag donde estaremos parados
    let currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    //Cambiamos la pagina
    const handlePaginate = pageNumber => {
        SetCurrentPage(pageNumber)
    }; 

    //retornamos los pokemons que se mostraran en la pág actual, la cantidad de pokemons que queremos por pág y la función que permite el cambio de pág
    return [ currentPokemons, pokemonsPerPage, currentPage, handlePaginate ]

}

export default usePagination; //Se exporta por defecto el nuevo hook