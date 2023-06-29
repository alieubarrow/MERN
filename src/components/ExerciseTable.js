import ExerciseRow from "./ExerciseRow";

function ExerciseTable(props) {
    const items = props.data
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <ExerciseRow key={index} item={item} />
                ))}
            </tbody>
        </table>
    )
}

export default ExerciseTable;