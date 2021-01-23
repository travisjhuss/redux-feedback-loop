import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function TwoUnderstanding() {

    const [understanding, setUnderstanding] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const onNext = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_UNDERSTANDING', payload: understanding })
        history.push('/three');
    }

    const onBack = (evt) => {
        evt.preventDefault();
        history.push('/one');
    }

    return (
        <>
            <h3>2 of 4 pages</h3>
            <h2>How well are you understanding the content?</h2>
            <select required onChange={(evt) => setUnderstanding(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />
            <button onClick={onBack}>BACK</button>
            <button onClick={onNext}>NEXT</button>
        </>
    )
}

export default TwoUnderstanding;