import { useSelector } from "react-redux";
import axios from 'axios';

function Admin() {

    const feedbackList = useSelector(store => store.feedbackList);

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
                            <td>{item.date}</td>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td>{item.flagged}</td>
                            <td><button>DELETE</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Admin;