import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
                        img: fluoride
                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
                        img: cavity
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',
                        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
                        img: whitening
                },
        ]
        return (
                <div className="my-16">
                        <div className="text-center uppercase">
                                <h3 className="font-bold text-xl text-secondary">Our Services</h3>
                                <h2 className='text-2xl font-bold'>Services We Provide</h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-14'>
                                {
                                        servicesData.map(service => <Service
                                                key={service.id}
                                                service={service}
                                        ></Service>)
                                }
                        </div>
                </div>
        );
};

export default Services;