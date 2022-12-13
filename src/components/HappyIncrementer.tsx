import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "../actions";


type HappyIncrementerProps={
    
}

const HappyIncrementer = (props:HappyIncrementerProps)=> {

    const [quantity, setQuantity] = useState<number>(0);

    const dispatch = useDispatch();

    function increment(){
        dispatch(happyButtonClicked(quantity,new Date()))
    }

    return (
    <div className="flex flex-col gap-2 items-start">
        <p>Are you happy?</p>
        <input 
            type="number"
            value={quantity}
            onChange={(event:FormEvent<HTMLInputElement>|any)=>{setQuantity(+event.target.value)}} 
            className="border rounded py-1 indent-2"
        />
        <button 
        onClick={increment}
        className="border rounded bg-green-500 text-white px-2 py-1">Yes</button>
    </div>
    )
}
HappyIncrementer.defaultProps={};
export default HappyIncrementer