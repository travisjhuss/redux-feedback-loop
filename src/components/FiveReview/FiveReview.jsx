import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import axios from 'axios';
import './FiveReview.css';


function FiveReview() {

    const currentFeedback = useSelector(store => store.currentFeedback);

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = () => {
        axios.post('/feedbackData', currentFeedback)
            .then(response => {
                dispatch({ type: 'CLEAR' })
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
        <div className="form">
            <h3 className="review-head">Review your feedback</h3>
            <p>How are you feeling today? {currentFeedback.feeling}</p>
            <p>How well are you understanding the content? {currentFeedback.understanding}</p>
            <p>How well are you being supported? {currentFeedback.support}</p>
            <p>Your comments: {currentFeedback.comments}</p>
            <Button id="review-back-button" size="large" onClick={onBack}>BACK</Button>
            <Button id="submit-button" size="large" onClick={onSubmit}>Submit</Button>
        </div>
    )
}

export default FiveReview;