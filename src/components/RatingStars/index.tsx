import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

import { Container } from './styles'

interface IPropsRatingStars {
    onStarUpdate: (value: number) => void;
    ratingSelected?: number
}

export function RatingStars({ onStarUpdate, ratingSelected }: IPropsRatingStars) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleOnClick = (value: number) => {
        setRating(value);
        onStarUpdate(value);
    }

    useEffect(() => {
        if (ratingSelected) {
            setRating(ratingSelected)
        }
    }, [ratingSelected])


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
                            onClick={() => handleOnClick(ratingValue)}
                            disabled={!!ratingSelected && true}
                        />
                        <FaStar
                            onMouseOver={() => setHover(ratingSelected ? ratingSelected : ratingValue)}
                            onMouseOut={() => setHover(ratingSelected ? ratingSelected : 0)}
                            size={30}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}

                        />
                    </label>
                )
            })}
        </Container>
    )
}
