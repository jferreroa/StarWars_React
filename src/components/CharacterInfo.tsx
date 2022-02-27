import React, {FC} from "react";


type CharacterInfoProps = {
    name:string,
    gender:string,
    
}


const CharacterInfo:FC<CharacterInfoProps> = ({name,gender}) => {
    if(gender === "n/a") gender = "N/A-Machine"
    
    return(
        <div className = "char">
            <div>Name: {name}</div>
            <div>Gender: {gender}</div>
           
        </div>
    )
}

export default CharacterInfo