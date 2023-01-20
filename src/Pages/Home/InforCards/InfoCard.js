import React from 'react';

const InfoCard = ({ card }) => {
        const { name, des, icon, bgClass } = card;
        return (
                <div className={`card text-white card-side shadow-xl p-5 ${bgClass}`}>
                        <figure>
                                <img src={icon} alt="Movie" />
                        </figure>
                        <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{des}</p>
                        </div>
                </div>
        );
};

export default InfoCard;