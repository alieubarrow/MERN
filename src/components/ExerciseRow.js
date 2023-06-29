import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function ExerciseRow(props) {
    const item = props.item;
    console.log(item);
    const handleDelete = () => {
        // Send DELETE request to delete exercise
        fetch(`/exercises/${item._id}`, {
            method: "DELETE",
        });
        window.location.reload();
    };
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.reps}</td>
            <td>{item.weight} {item.unit}</td>
            <td>{item.date}</td>
            <td>
                <Link to={`/edit-exercise/${item._id}`}>
                    <button>
                        Edit <AiFillEdit />
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={handleDelete}>
                    Delete <AiFillDelete />
                </button>
            </td>
        </tr>
    )
}

export default ExerciseRow;