import React, { useState, useEffect } from 'react';

const ExerciseForm = ({ isEdit, exerciseId }) => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        if (isEdit) {
            // Fetch exercise data for prepopulation
            fetch(`/exercises/${exerciseId}`)
                .then(response => response.json())
                .then(data => {
                    setName(data.name);
                    setReps(data.reps);
                    setWeight(data.weight);
                    setUnit(data.unit);
                    setDate(data.date);
                })
                .catch(error => {
                    console.error('Error fetching exercise data:', error);
                });
        }
    }, [isEdit, exerciseId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const exerciseData = {
            name,
            reps,
            weight,
            unit,
            date
        };

        const requestOptions = {
            method: isEdit ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exerciseData)
        };

        fetch(`/exercises${isEdit ? `/${exerciseId}` : ''}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    if (isEdit) {
                        console.log('Exercise updated successfully');
                        alert('Exercise updated successfully');
                    } else {
                        console.log('Exercise created successfully');
                        alert('Exercise created successfully');
                    }
                    // Redirect to Home Page
                    window.location.href = '/';
                } else {
                    throw new Error(`Failed to ${isEdit ? 'update' : 'create'} exercise`);
                }
            })
            .catch(error => {
                console.error(`Error ${isEdit ? 'updating' : 'creating'} exercise:`, error);
                alert(`Error ${isEdit ? 'updating' : 'creating'} exercise: ${error.message}`);
                // Redirect to Home Page
                window.location.href = '/';
            });
    };



    return (
        <form className="exercise-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Reps:
                <input type="text" value={reps} onChange={e => setReps(e.target.value)} required />
            </label>
            <br />
            <label>
                Weight:
                <input type="text" value={weight} onChange={e => setWeight(e.target.value)} required />
            </label>
            <br />
            <label>
                Unit:
                <select value={unit} onChange={e => setUnit(e.target.value)} required>
                    <option value="">Select Unit</option>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>

            </label>
            <br />
            <label>
                Date (MM-DD-YY):
                <input type="text" value={date} onChange={e => setDate(e.target.value)} required />
            </label>
            <br />
            <input className='submit-button' type="submit" value={isEdit ? 'Update' : 'Create'} />
        </form>
    );
};

export default ExerciseForm;
