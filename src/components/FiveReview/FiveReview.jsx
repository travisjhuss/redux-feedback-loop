import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function FiveReview() {

    const currentFeedback = useSelector(store => store.currentFeedback);

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = () => {
        axios.post('/feedbackData', currentFeedback)
            .then(response => {
                dispatch({type: 'CLEAR'})
                history.push('/finish');
            }).catch(err => {
                console.error(err)
            })
    } // end onSubmit

    const onBack = (evt) => {
        evt.preventDefault();
        history.push('/four');
    }

    console.log('current form data:', currentFeedback);
    return (
        <>
        <h3>Review your feedback</h3>
        <p>How are you feeling today? {currentFeedback.feeling}</p>
        <p>How well are you understanding the content? {currentFeedback.understanding}</p>
        <p>How well are you being supported? {currentFeedback.support}</p>
        <p>Your comments: {currentFeedback.comments}</p>
        <button onClick={onBack}>BACK</button>
        <button onClick={onSubmit}>SUBMIT</button>
        </>
    )
}

export default FiveReview;