import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';
import './StartingPage.css';



function StartingPage() {

    const history = useHistory();

    const onStart = () => {
        console.log('clicked start');
        history.push('/one');
    } // end onStart

    return (
        <>
        <img src="/images/goat_small.jpg"/>
        <br/>
        <Button 
            id="start-button"
            variant="contained"
            size="large"
            onClick={onStart}
        >START</Button>
        </>
    )
} 

export default StartingPage;