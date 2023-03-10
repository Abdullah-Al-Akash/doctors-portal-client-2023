import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
        const reviewsData = [
                {
                        _id: 1,
                        name: 'Winson Herry',
                        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                        location: 'California',
                        img: people1
                },
                {
                        _id: 2,
                        name: 'Winson Herry',
                        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                        location: 'California',
                        img: people2
                },
                {
                        _id: 3,
                        name: 'Winson Herry',
                        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                        location: 'California',
                        img: people3
                }
        ]
        return (
                <section className="my-16">
                        <div className="flex justify-between">
                                <div>
                                        <h3 className="text-secondary text-xl font-bold">Testimonial</h3>
                                        <h1 className="text-3xl">What Our Patients Says</h1>
                                </div>
                                <div>
                                        <img className="w-24 lg:w-48" src={quote} alt="" />
                                </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                                {
                                        reviewsData.map(review => <ReviewCard
                                                key={review._id}
                                                review={review}
                                        ></ReviewCard>)
                                }
                        </div>
                </section>
        );
};

export default Testimonial;