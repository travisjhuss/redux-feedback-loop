import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Radio, FormControlLabel, RadioGroup, FormControl } from '@material-ui/core';
import './OneFeeling.css';

function OneFeeling() {

    const [feeling, setFeeling] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_FEELING', payload: feeling })
        history.push('/two');
    }

    return (
        <div className="feeling-form">
            <h3 className="page-count">1 of 4 pages</h3>
            <h2>How are you feeling today?</h2>
            <FormControl component="fieldset" >
                <RadioGroup row name="feeling" defaultValue="3" onChange={(evt) => setFeeling(evt.target.value)}>
                    <FormControlLabel
                        value="1"
                        control={<Radio color="default" />}
                        label="1"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="default" />}
                        label="2"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="default" />}
                        label="3"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio color="default" />}
                        label="4"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="5"
                        control={<Radio color="default" />}
                        label="5"
                        labelPlacement="top"
                    />
                </RadioGroup>
            </FormControl>
            <br />
            <Button id="next-button" size="large" onClick={onClick}>NEXT</Button>
        </div>
    )
}

export default OneFeeling;