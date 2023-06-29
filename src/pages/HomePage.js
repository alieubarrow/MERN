import { useState, useEffect } from "react";
import ExerciseTable  from "../components/ExerciseTable";
import { Link } from "react-router-dom";
function HomePage(props) {
    const [exercises,setExercises] = useState([]);
    useEffect(() => {
        fetch("/exercises")
          .then((response) => response.json())
          .then((data) => setExercises(data))
          .catch((error) => console.error(error));
      }, []);

    return (
        <div className="Main">
            <Link to="/create-exercise">
                <button>Add Exercise</button>
            </Link>
            <ExerciseTable data={exercises}/>
        </div>
    )
}

export default HomePage;