import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import { Container } from './styles'

interface IPropsRatingStars{
    onStarUpdate: (value: number) => void;
}

export function RatingStars({onStarUpdate}:IPropsRatingStars) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    
    const handleOnClick = (value:number) => {
        setRating(value);
        onStarUpdate(value);
      }
    
    
    return (
        <Container>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            // onClick={() => setRating(ratingValue)}
                            onClick={() => handleOnClick(ratingValue)}
                            />
                        <FaStar 
                            onMouseOver={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(0)}
                            size={30} 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 

                        />
                    </label>
                )
            })}
        </Container>
    )
}
