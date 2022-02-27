/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from "react";
import CharacterSelected from "./CharacterSelected";
import Personaje from "./Personaje";

type Character = {
    name: string,
    gender: string,
    homeworld: string,
    birth_year: string,
    height: string,
    mass: string,
    films: string[]
}
const Lista: FC = () => {

    //search format json 


    const [characterByDefault, setCharacterByDefault] = useState<any>()


    const getChars = async (texto: string) => {

        const IS_SEARCH_ALL_CHARACTERS = (texto === 'firstCharge' || !texto)

  
        let response: any = ""
        if (IS_SEARCH_ALL_CHARACTERS) {
            response = await fetch("https://swapi.dev/api/people/")
            let data = await response.json()

            data.results.map(async (char: Character) => {
                const planet = await fetch(char.homeworld)
                const planetJson = await planet.json()
                const planetName = planetJson.name
                console.log(planetName, "PLANETA PERSONAJE BUSCADO")
                char.homeworld = planetName
            })
            
            setChars(data.results)
            console.log("PRIMERA BUSQUEDAA",data.results[0].homeworld)
            if(data.results[0].homeworld === "https://swapi.dev/api/planets/1/"){
                data.results[0].homeworld = "Tatooine"
            }
            setCharacterByDefault(data.results[0])

        } else {
            

            const a = chars.filter((elem) => {
                return elem.name === texto
            })

            if(!a)
            return
            

            response = await fetch(`https://swapi.dev/api/people/?search=${texto}`)
            let data = await response.json()
        
            const planet = await fetch(data.results[0].homeworld)
            const planetJson = await planet.json()
            const planetName = planetJson.name
            console.log(planetName, "PLANETA PERSONAJE BUSCADO")
            data.results[0].homeworld = planetName
            console.log(data.results[0].name, "NOMBRE DATA RESULT")
            setCharacterByDefault(data.results[0])
            
        }

        
    }




    const [char, setChar] = useState<Character>()
    const [chars, setChars] = useState<Character[]>([])
    const [valor, setValor] = useState<string>("")

    useEffect(() => {
        getChars('firstCharge')
    }, [])






    return (
        <><div>
            <div className="inputButon">
                <input type="text" value={valor} onChange={(e) => setValor((e.target.value))}></input>
                <button className="boton" onClick={async () => {
                    getChars(valor);
                }}> Buscar </button>
            </div>

            <div>
                {chars.length === 0 && <div>Cargando</div>}
                {chars.map((charX, index) => <Personaje setCharacterByDefault={setCharacterByDefault} character={charX} name={charX.name} gender={charX.gender} key={charX.name} />)}
                {/* /*{char && <Personaje name={char.name} gender={char.gender} key={char.name} />}*/}

            </div>
        </div>
            <div>
                {<CharacterSelected character={characterByDefault}/>}
            </div></>
    )
}

export default Lista