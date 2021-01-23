import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FourComments() {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: comments })
        history.push('/review');
    }

    return (
        <>
            <h3>4 of 4 pages</h3>
            <h2>Any comments you want to leave?</h2>
            <input
                 required 
                 type="text"
                 placeholder="Add comments here..."
                 onChange={(evt) => setComments(evt.target.value)}
            />
            <br />
            <button onClick={onClick}>NEXT</button>
        </>
    )
}

export default FourComments;