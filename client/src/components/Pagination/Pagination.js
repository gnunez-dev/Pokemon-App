import React from 'react';
import './Pagination.css';

const Pagination = ({ pokemonsPerPage, totalPokemons, handlePaginate, currentPage }) => {
   
    const pageNumbers = []; //En este array se van a ir pusheando los numeros de págs que se tendrán

    // Math.ceil() --> devuelve el entero mayor o igual más próximo a un número dado. 
    //la condición de parada del for hace referencia al limite de págs que tendremos disponible en función de la cantidad total
    //de pokemons entre la cantidad que queremos mostrar por pág, Math.ceil ayuda a tener un número entero de total de págs
    for(let i = 1; i <= Math.ceil( totalPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="pagination">
            
            {pageNumbers.map( n => {

                return(
                   
                    <button
                        key={n}
                        className="btn-pagination"
                        onClick={ ()=> handlePaginate(n)} 
                        className={ currentPage === n ? `active` : ``}
                    >
                    {n}
                    </button>
                    
                )
            })}

        </nav>
    )

}


export default Pagination

