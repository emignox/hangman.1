import './keyboard.modules.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

export function Keyboard(){
return <div style={{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(75px,1fr))',
    gap:'1rem',
}}> 


{KEYS.map(key => {
    return <button   className='inactive' key={key}>{key}</button>
})}
</div>

}