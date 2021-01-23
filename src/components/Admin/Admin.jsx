import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminItems from '../AdminItems/AdminItems';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Admin.css';

function Admin() {

    const feedbackList = useSelector(store => store.feedbackList);

    const dispatch = useDispatch();

    useEffect(() => {
      fetchFeedback();
    }, [])
  
    const fetchFeedback = () => {
      axios.get('/feedbackData')
        .then((response) => {
          const action = {
            type: 'SET_FEEDBACK_LIST',
            payload: response.data
          }
          dispatch(action);
  
        }).catch(err => {
          alert('error in GET feedback');
          console.error(err)
        })
    }
 

    console.log('feedbackList:', feedbackList);
    return (
        <Paper id="admin-container" elevation="6">
            <h3>Admin Page</h3>
            <Table size="small" aria-label="a dense table" id="table" >
                <TableHead>
                    <TableRow>
                        <TableCell style={{color: 'white'}}>Feeling</TableCell>
                        <TableCell style={{color: 'white'}}>Understanding</TableCell>
                        <TableCell style={{color: 'white'}}>Support</TableCell>
                        <TableCell style={{color: 'white'}}>Comments</TableCell>
                        <TableCell style={{color: 'white'}}>Flag</TableCell>
                        <TableCell style={{color: 'white'}}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {feedbackList.map((item, i) =>
                        <TableRow key={i}>
                            <AdminItems item={item} fetchFeedback={fetchFeedback}/>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Admin;