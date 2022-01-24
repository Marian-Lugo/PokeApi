const getPokemon = async (name = 1) => {
    try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        const response = request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

export default getPokemon;