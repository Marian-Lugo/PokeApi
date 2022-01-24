import "bootstrap/dist/css/bootstrap.css";

import card from "./components/card";
import getPokemon from "./tools/getData";

const app = document.querySelector("#app .viewPokemon");
const btn = document.querySelector(".btn");
 
const randomNumber = () => Math.ceil(Math.random() * 100);

const renderPokemon = async () => {
    const {sprites, name } = await getPokemon(randomNumber());
    app.innerHTML = card({
         name,
        img: sprites.other.home.front_default,
    });
    console.log(sprites.other["official-artwork"].front_default);
};

btn.addEventListener("click", () => {
    renderPokemon();
});


 