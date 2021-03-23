import React from "react";
import Button from "./index.jsx"
const Button = ({onClick, primary, secondary, link, children}) => {
    let type = null;
    if (primary) type = "primary";
    if (secondary) type = "secondary";
    if (link) type = "link";

    return (
        <button className={type} onClick={()=>onClick()}>{children}</button>
    )
}

export default Button;