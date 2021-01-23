import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminItems from '../AdminItems/AdminItems';
import axios from 'axios';

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
        <>
            <h3>Admin Page</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map((item, i) =>
                        <tr key={i}>
                            <AdminItems item={item} fetchFeedback={fetchFeedback}/>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Admin;