/* eslint-disable import/no-anonymous-default-export */
import React, { FC} from "react";


type Character = {
    name: string,
    gender: string,
    homeworld: string,
    birth_year: string,
    height: string,
    mass: string,
    films: string[]
}

type CharProps = {
    character:Character
}

const CharacterSelected: FC<CharProps> =({ character }) => {
    
    /*const planetName = async (character: any ): Promise<string> => {
        if(character.homeworld.length > 10) {
            const planet = await fetch(character.homeworld)
            const planetJson = await planet.json()
            const planetname = planetJson.name
            return planetname
        }else
        return character.homeworld
        
    }
    

    const a = planetName(character).then(() => {
        console.log(a, "PULSARRRR")

    })*/
  
    
    return (
        < div className="charSelect">
            {character && <div className="selected">
                <div>Name: {character.name}</div>
                <div>Gender: {character.gender}</div>
                <div>Homeworld: {character.homeworld}</div>
                <div>Birth Date: {character.birth_year}</div>
                <div>Height: {character.height}</div>
                <div>Mass: {character.mass}</div>
            </div>}
        </div>

    )
}


export default CharacterSelected