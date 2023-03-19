import React, { useEffect, useState } from "react";

const BoardTile = (props) => {   
    return(
        <div>  
            <div style={{ backgroundColor: props.whatColor,
                width: "30px", height: "30px",
                border: "1px solid rgb(0, 0, 0)",
                }}/> 
        </div>
    )
}

export default BoardTile;