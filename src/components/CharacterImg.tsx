/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */

import React, {FC} from "react";

type CharacterImgProps = {
    urlImg:string,
}


const CharacterImg:FC<CharacterImgProps> = ({urlImg}) => {
    return (
        //deberia ser img
        <div className ="img">
            <div> {urlImg}</div>
        </div>
    )
}

export default CharacterImg;