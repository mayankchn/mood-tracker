import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux/es/exports"
import { sadButtonClicked } from "../actions";

type SadIncrementerProps={

}

const SadIncrementer = (props:SadIncrementerProps) => {

    const [quantity, setQuantity] = useState<number>(0);

    const dispatch = useDispatch();

    function increment(){
        dispatch(sadButtonClicked(quantity,new Date()));
    }

    return (
        <div className="flex flex-col gap-2 items-start">
            <p>Are you sad?</p>
            <input 
                type="number"
                value={quantity}
                onChange={(event:FormEvent<HTMLInputElement>|any) => {setQuantity(+event.target.value)}} 
                className="border rounded py-1 indent-2"
            />
            <button 
            onClick={increment}
            className="border rounded bg-yellow-500 text-white px-2 py-1">Yes</button>
        </div>
    )
}
SadIncrementer.defaultProps={};
export default SadIncrementer