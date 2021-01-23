import { useHistory } from "react-router-dom";

function Finish() {

    const history = useHistory();

    const onClick = () => {
        history.push('/one');
    } // end onClick

    return (
        <>
        <h3>Finished!</h3>
        <button onClick={onClick}>LEAVE NEW FEEDBACK</button>
        </>
    )
} 

export default Finish;