import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch,Location} = useContext(AppContext);
    const [location, setLocation] = useState(Location);
    const action = {
        type: 'CHG_LOCATION',
        payload: location
    }
    const submitEvent = (event) => {
        setLocation(event.target.value);
        dispatch(action);
    }
    return (
        <div className='alert alert-secondary'> Location {
            <select name="Location" id="Location" onChange={submitEvent}>
                <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
            </select> 
        }
        </div>

    );
};

export default Location;