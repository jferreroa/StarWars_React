/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { FC, useState } from 'react'
import CharacterImg from './CharacterImg'
import CharacterInfo from './CharacterInfo'
import CharacterSelected from './CharacterSelected'
import "./styles/Layout.css"

type personajeProps = {
    name: string, gender: string, setCharacterByDefault:any, character:any
}

// hacer layout contenedor y luego crear dos componentes y meterlos ahi 
const Personaje: FC<personajeProps> = ({ setCharacterByDefault, character, name, gender }) => {
    let x = 0
    //const [nombre, setNombre] = useState<string>(name)

  

    return (
        
        <div>
            <div className="personaje" onClick={() => {setCharacterByDefault(character)}}>
                <CharacterImg key={x++} urlImg={name} />
                <CharacterInfo key={x} name={name} gender={gender} />
            </div>
        </div>
    )
}


export default Personaje;