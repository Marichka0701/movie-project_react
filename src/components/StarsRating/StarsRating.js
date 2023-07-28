import React from 'react';

import '../reset.css';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({stars}) => {

    return (
        <div>
            <StarRatings starRatedColor="orange"
                         numberOfStars={10}
                         rating={stars}
                         name='rating'
                         starSpacing='0px'
                         starDimension='15px'
            />
        </div>
    );
};

export default StarsRating;