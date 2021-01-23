import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ThreeSupport() {

    const [support, setSupport] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_SUPPORT', payload: support })
        history.push('/four');
    }

    const onBack = (evt) => {
        evt.preventDefault();
        history.push('/two');
    }

    return (
        <>
            <h3>3 of 4 pages</h3>
            <h2>How well are you being supported?</h2>
            <select required onChange={(evt) => setSupport(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />
            <button onClick={onBack}>BACK</button>
            <button onClick={onClick}>NEXT</button>
        </>
    )
}

export default ThreeSupport;