import {filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsByType, filterPokemonsFrom} from '../actions/index'
import { FILTER_ORDER, FILTER_ORDER_ATTACK, FILTER_TYPE, FILTER_ORIGIN } from "../actions/constants";


describe("Action Creators - Filter", () => {

    it('Deberia devolver la acción para filtrar en orden [asc]', () => {
        expect(filterPokemonsByOrden('asc')).toEqual({
            type: FILTER_ORDER, payload: 'asc' 
        })
    });

    it('Deberia devolver la acción para filtrar el orden de attack en [desc]', () => {
        expect(filterPokemonsByOrdenAttack('desc')).toEqual({
            type: FILTER_ORDER_ATTACK, payload: 'desc' 
        })
    });

    it('Deberia devolver la acción para filtrar por type [all]', () => {
        expect(filterPokemonsByType('all')).toEqual({
            type: FILTER_TYPE, payload: 'all' 
        })
    });

    it('Deberia devolver la acción para filtrar según el origen [existentes]', () => {
        expect(filterPokemonsFrom('existentes')).toEqual({
            type: FILTER_ORIGIN, payload: 'existentes' 
        })
    });

})
