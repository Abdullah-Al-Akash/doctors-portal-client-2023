import React from 'react';

const ReviewCard = ({ review }) => {
        const { name, img, review: userReview, location } = review;
        return (
                <div className="card bg-base-100 shadow-xl my-8">
                        <div className="card-body">
                                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                                <div className="card-actions flex items-center">
                                        <div className="avatar mr-4 my-4">
                                                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                                        <img src={img} alt="" />
                                                </div>
                                        </div>
                                        <div className=''>
                                                <h4 className='font-bold text-base'>{name}</h4>
                                                <p>{location}</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ReviewCard;