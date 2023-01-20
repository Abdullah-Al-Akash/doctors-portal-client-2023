import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
        const cardData = [
                {
                        id: 1,
                        name: 'Opening Hours',
                        des: 'Open 9.00Am to 5.00PM Everyday',
                        icon: clock,
                        bgClass: 'bg-gradient-to-r from-secondary to-primary'
                },
                {
                        id: 2,
                        name: 'Our Locations',
                        des: 'Open 9.00Am to 5.00PM Everyday',
                        icon: marker,
                        bgClass: 'bg-accent'
                },
                {
                        id: 3,
                        name: 'Contact Us',
                        des: 'Open 9.00Am to 5.00PM Everyday',
                        icon: phone,
                        bgClass: 'bg-gradient-to-r from-secondary to-primary'
                },
        ];
        return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 py-6'>
                        {
                                cardData.map(card => <InfoCard
                                        key={card.id}
                                        card={card}
                                ></InfoCard>)
                        }
                </div>
        );
};

export default InfoCards;