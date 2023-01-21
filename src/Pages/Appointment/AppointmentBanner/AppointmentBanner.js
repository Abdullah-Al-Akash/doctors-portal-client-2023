import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

        return (
                <section className="my-20">
                        <div className="hero">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={chair} alt='Dentist Chair' className="md:w-1/2 rounded-lg shadow-2xl mx-auto" />
                                        <div className="mx-auto">
                                                <DayPicker
                                                        mode="single"
                                                        selected={selectedDate}
                                                        onSelect={setSelectedDate}
                                                ></DayPicker>
                                                <p>You have selected date: {format(selectedDate, 'PP')}</p>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default AppointmentBanner;