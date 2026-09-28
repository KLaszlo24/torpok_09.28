interface TorpProps{
    torpNeve: string
    torpKora: number
    muvelet: ()=> void;
}

export function Torp(props: TorpProps){
    return <>
        <h2>{props.torpNeve}</h2>
        <p>{props.torpKora}</p>
        <button onClick={props.muvelet}>FGv meghívása</button>
    </>
}