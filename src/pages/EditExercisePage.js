import { useParams } from 'react-router-dom';
import ExerciseForm from '../components/ExerciseForm';
function EditExercisePage(props) {
    const { id } = useParams();
    console.log(id);
    return (
        <div className="Main">
            <h2>Edit Exercise</h2>
            <ExerciseForm isEdit={true} exerciseId={id} />
        </div>
    )
}
export default EditExercisePage;