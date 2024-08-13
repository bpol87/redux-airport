import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

function AirlineForm() {
    const [airlineNameInput, setAirlineNameInput] = useState('');
    const [airplaneTotalInput, setAirplaneTotalInput] = useState('');

    const dispatch = useDispatch();

    const addAirline = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_AIRLINE',
            payload: {
                name: airlineNameInput,
                airplaneTotal: airplaneTotalInput
            }
        })
        setAirlineNameInput('');
        setAirplaneTotalInput('');
    }

    return (
        <div>
            <h1>Redux Airport</h1>
            <h2>Add an Airline</h2>
            <form onSubmit={addAirline}>
                <input
                    value={airlineNameInput}
                    onChange={e => setAirlineNameInput(e.target.value)}
                    placeholder='Airline Name'
                    type="text" />
                    <input
                    value={airplaneTotalInput}
                    onChange={e => setAirplaneTotalInput(e.target.value)}
                    placeholder='Airplanes Number'
                    type="number" />
                <button type='submit'>Add Airline</button>
            </form>
        </div>
    )
}
export default AirlineForm;