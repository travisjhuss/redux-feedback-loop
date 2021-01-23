import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './FourComments.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF'
      }
    },
  });

function FourComments() {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const onNext = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: comments })
        history.push('/review');
    }

    const onBack = (evt) => {
        evt.preventDefault();
        history.push('/three');
    }

    return (
        <div className="form">
            <h3 className="page-count">4 of 4 pages</h3>
            <h2>Any comments you want to leave?</h2>
            <ThemeProvider theme={theme}>
            <TextField
                id="comments"
                multiline
                rows={6}
                variant="outlined"
                label="Add here"
                style={{width: 350}}
                onChange={(evt) => setComments(evt.target.value)}
            />
            </ThemeProvider>
            <br />
            <Button id="co-back-button" size="large" onClick={onBack}>BACK</Button>
            <Button id="co-next-button" size="large" onClick={onNext}>NEXT</Button>
        </div>
    )
}

export default FourComments;