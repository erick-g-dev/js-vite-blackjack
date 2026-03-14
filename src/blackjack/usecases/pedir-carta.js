

/**
 * Esta función me permite tomar una carta
 * @param {ArrayString} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}