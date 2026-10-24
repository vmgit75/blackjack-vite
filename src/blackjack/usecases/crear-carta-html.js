export const crearCartaHTML = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `../public/assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};

export default crearCartaHTML;
