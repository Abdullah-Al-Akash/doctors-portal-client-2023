import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
        return (
                <div>
                        <p className="text-base text-secondary font-bold text-center">Available Services on {format(selectedDate, 'PP')}</p>
                </div>
        );
};

export default AvailableAppointments;