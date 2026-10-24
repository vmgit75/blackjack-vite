/**
 * Esta función obtiene la siguiente carta del deck
 * @param {Array<String>} deck 
 * @returns {String} regresa la siguiente carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck)
    throw new Error("deck es obligatorio como arreglo de strings");

  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();

  return carta;
};

export default pedirCarta;