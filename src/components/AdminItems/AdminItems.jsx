import axios from 'axios';
import TableCell from '@material-ui/core/TableCell';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import IconButton from '@material-ui/core/IconButton';
import './AdminItem.css';
import Swal from 'sweetalert2';

function AdminItems({ item, fetchFeedback }) {


    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: ' #3C474B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!'
                );
                axios.delete(`/feedbackData/${item.id}`)
                    .then((response) => {
                        console.log(response);
                        fetchFeedback();
                    }).catch((err) => {
                        console.log(err);
                    })
            }
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
            <TableCell style={{ color: 'white' }}>{item.feeling}</TableCell>
            <TableCell style={{ color: 'white' }}>{item.understanding}</TableCell>
            <TableCell style={{ color: 'white' }}>{item.support}</TableCell>
            <TableCell style={{ color: 'white' }}>{item.comments}</TableCell>
            <TableCell >
                <IconButton onClick={markFlagged}>
                    {item.flagged
                        ? <FlagIcon style={{ color: 'white' }} />
                        : <FlagOutlinedIcon style={{ color: 'white' }} />
                    }
                </IconButton>
            </TableCell>
            <TableCell >
                <IconButton onClick={handleDelete}>
                    <DeleteOutlineIcon style={{ color: 'white' }} />
                </IconButton>
            </TableCell>
        </>
    )
}

export default AdminItems;