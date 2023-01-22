import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
        const { name, slots } = treatment;

        const date = format(selectedDate, 'PP');

        const handleBooking = e => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const email = form.email.value;
                const slot = form.slot.value;
                const phone = form.phone.value;
                const booking = {
                        apointmentDate: date,
                        treatment: treatment.name,
                        patient: name,
                        slot,
                        email,
                        phone
                }
                console.log(booking);
                // After Send Date in the server close the modal:
                setTreatment(null);
        }
        return (
                <>
                        <input type="checkbox" id="booking-modal" className="modal-toggle" />
                        <div className="modal">
                                <div className="modal-box relative">
                                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Appointment for {name}</h3>
                                        {/* Form */}
                                        <form onSubmit={handleBooking} className='mt-8 grid grid-cols-1 gap-4'>
                                                <input type="text" value={date} className="input input-bordered w-full" disabled />
                                                <select name="slot" className="select select-bordered w-full">
                                                        {
                                                                slots.map((slot, i) => <option
                                                                        key={i}
                                                                        value={slot}>{slot}</option>)
                                                        }
                                                </select>
                                                <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                                <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" />
                                                <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                                                <input type="submit" value="Submit" className="input input-bordered w-full bg-accent text-white font-bold" />
                                        </form>
                                </div>
                        </div>
                </>
        );
};

export default BookingModal;