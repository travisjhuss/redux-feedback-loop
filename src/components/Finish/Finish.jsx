import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import './Finish.css';

function Finish() {

    const history = useHistory();

    const onClick = () => {
        history.push('/one');
    } // end onClick

    return (
        <div className="finish">
        <h3>Finished!</h3>
        <img src="/images/feedback-finish.jpg" width="450"/>
        <br/>
        <Button id="restart-button" onClick={onClick}>LEAVE NEW FEEDBACK</Button>
        </div>
    )
} 

export default Finish;