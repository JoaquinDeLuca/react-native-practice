import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain/entities/pokemon";
import { PokeAPIPokemon } from "../../infrastructure/interfaces/pokeapi.interfaces";
import { pokeApiPokemonToEntity } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
    try {
        const { data } = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${id}`);

        const pokemon = await pokeApiPokemonToEntity(data);


        return pokemon;

    } catch (error) {
        console.log("> ERROR", error);
        throw new Error(`Error get pokemon by id: ${id}`)
    }
}