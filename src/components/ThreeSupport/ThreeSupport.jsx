import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Radio, FormControlLabel, RadioGroup, FormControl } from '@material-ui/core';
import './ThreeSupport.css';

function ThreeSupport() {

    const [support, setSupport] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const onNext = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_SUPPORT', payload: support })
        history.push('/four');
    }

    const onBack = (evt) => {
        evt.preventDefault();
        history.push('/two');
    }

    return (
        <div className="form">
        <h3 className="page-count">3 of 4 pages</h3>
        <h2>How well are you being supported?</h2>
        <FormControl component="fieldset" >
            <RadioGroup row name="supported" defaultValue="3" onChange={(evt) => setSupport(evt.target.value)}>
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
        <Button id="sp-back-button" size="large" onClick={onBack}>BACK</Button>
        <Button id="sp-next-button" size="large" onClick={onNext}>NEXT</Button>
    </div>
    )
}

export default ThreeSupport;