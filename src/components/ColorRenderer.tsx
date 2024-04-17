import { useState } from "react";
import Color from "./Color"
import './ColorRenderer.css';

const COLORS= [{
    hex:'#6495ED',
    name:'Cornflower blue'
},
{
    hex:'#f77fbe',
    name:'Persian pink'
},
{
    hex:'#76ff7a',
    name:'Screamin Green '
},
{
    hex:'#fb4d46',
    name:'Tart Orange'
}]


export const ColorRenderer = () => {

    const [bgColor, setBgColor] = useState('white')
    return (
        <div className="colors" style={{backgroundColor:bgColor}}>
            { COLORS.map( color => <Color name={color.name} hex={color.hex} key={color.hex} setBgColor={setBgColor}/>) }
        </div>
    )
}