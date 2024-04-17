import './Color.css'

type ColorProps = {
    hex: string,
    name: string,
    setBgColor:  (value: string) => void
}

const Color = ({name, hex, setBgColor}:ColorProps) => {
    return (
        <div className="color-square" style={{backgroundColor: hex}} onClick={()=> setBgColor(hex)}>
            <h3>{name}</h3>
        </div>
    )
}



export default Color;
