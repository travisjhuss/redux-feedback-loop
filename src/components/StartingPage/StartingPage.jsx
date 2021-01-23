import { useHistory } from "react-router-dom";
import {Paper, Button} from '@material-ui/core';
import './StartingPage.css';



function StartingPage() {

    const history = useHistory();

    const onStart = () => {
        console.log('clicked start');
        history.push('/one');
    } // end onStart

    return (
        <Button 
            id="start-button"
            variant="contained"
            size="large"
            onClick={onStart}>START</Button>
    )
} 

export default StartingPage;