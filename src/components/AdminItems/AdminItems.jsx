import moment from 'moment';
import axios from 'axios';

function AdminItems({ item, fetchFeedback }) {


    const handleDelete = () => {
        console.log('clicked delete');
        console.log('id:', item.id);

        axios.delete(`/feedbackData/${item.id}`)
            .then((response) => {
                console.log(response);
                fetchFeedback();
            }).catch((err) => {
                console.log(err);
            })
    } // end deletePhoto

    const markFlagged = () => {
        console.log('clicked mark flagged');
        console.log('id:', item.id);

        axios.put(`/feedbackData/flag/${item.id}`)
            .then((response) => {
                fetchFeedback();
            }).catch((err) => {
                console.log('Error in flag PUT:', err);
            })
    } // end handleLike


    return (
        <>
            <td>{moment(item.date).format('MMMM Do YYYY')}</td>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>
                <button onClick={markFlagged}>
                    {item.flagged
                        ? <>FLAGGED</>
                        : <>NOT FLAGGED</>
                    }
                </button>
            </td>
            <td><button onClick={handleDelete}>DELETE</button></td>
        </>
    )
}

export default AdminItems;