import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentCard from './AppointmentCard';

const AvailableAppointments = ({ selectedDate }) => {
        const [appointmentOptions, setAppointmentOptions] = useState([]);
        const [treatment, setTreatment] = useState(null);

        useEffect(() => {
                fetch('apppointmentOptions.json')
                        .then(res => res.json())
                        .then(data => setAppointmentOptions(data))
        }, [])
        return (
                <div className="">
                        <p className="text-base text-secondary font-bold text-center">Available Services on {format(selectedDate, 'PP')}</p>
                        {/* Appointment Option */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16'>
                                {
                                        appointmentOptions.map(appointment => <AppointmentCard
                                                key={appointment._id}
                                                appointment={appointment}
                                                setTreatment={setTreatment}
                                        ></AppointmentCard>)
                                }
                        </div>
                        {
                                treatment && <BookingModal
                                        treatment={treatment}
                                        selectedDate={selectedDate}
                                        setTreatment={setTreatment}
                                ></BookingModal>
                        }
                </div>
        );
};

export default AvailableAppointments;