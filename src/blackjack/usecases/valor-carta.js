/**
 * Esta función obtiene el valor de una carta
 * @param {String} carta, Ejemplo: "10D", "2S", "AH","QC" 
 * @returns {Number} regresa el valor de la carta
 */
export const valorCarta = (carta) => {
    if(!carta || carta.length <= 1)
        throw new Error('La carta es obligatorio como un string de al menos 2 caracteres.');

  const valor = carta.substring(0, carta.length - 1);
  
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

export default valorCarta;