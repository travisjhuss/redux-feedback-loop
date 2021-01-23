import { useHistory } from "react-router-dom";


function StartingPage() {

    const history = useHistory();

    const onStart = () => {
        console.log('clicked start');
        history.push('/one');
    } // end onStart

    return (
        <button onClick={onStart}>START</button>
    )
} 

export default StartingPage;