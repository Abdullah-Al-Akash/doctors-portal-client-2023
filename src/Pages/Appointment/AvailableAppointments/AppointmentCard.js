import React from 'react';

const AppointmentCard = ({ appointment, setTreatment }) => {
        const { name, slots } = appointment;
        return (
                <div className="card shadow-xl">
                        <div className="card-body items-center text-center">
                                <h2 className="card-title text-secondary">{name}</h2>
                                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                                <div className="card-actions">
                                        <label
                                                disabled={slots.length == 0}
                                                onClick={() => setTreatment(appointment)}
                                                htmlFor="booking-modal"
                                                className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                                </div>
                        </div>
                </div>
        );
};

export default AppointmentCard;