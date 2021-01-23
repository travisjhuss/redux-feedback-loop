import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function OneFeeling() {

    const [feeling, setFeeling] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (evt) => {
        evt.preventDefault();
        dispatch({type: 'SET_FEELING', payload: feeling})
        history.push('/two');
    }

    return (
        <>
            <h3>1 of 4 pages</h3>
            <h2>How are you feeling today?</h2>
            <select required onChange={(evt) => setFeeling(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br/>
            <button onClick={onClick}>NEXT</button>
        </>
    )
} 

export default OneFeeling;