import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircle as emptyCircle, 
  faStar as emptyStar 
} from '@fortawesome/free-regular-svg-icons'
import { 
  faCircle as wholeCircle, 
  faAdjust as halfCircle, 
  faStar as wholeStar, 
  faStarHalfAlt as halfStar 
} from '@fortawesome/free-solid-svg-icons'


export const RatingIcons = ({ iconStyle = 'star', color = 'yellow', num = 5, rating, numOfReviews }) => {

  const icons = {
    star: { empty: emptyStar, half: halfStar, whole: wholeStar },
    circle: { empty: emptyCircle, half: halfCircle, whole: wholeCircle }
  }

  return (
    <div className="display-rating">
      {Array(num).fill(1).map((element, index) => (
        <FontAwesomeIcon 
          key={index} 
          icon={rating > index && rating < index + 1 ? icons[iconStyle].half :
            rating > index ? icons[iconStyle].whole : icons[iconStyle].empty} 
          color={color}
        />
      ))}
      <span>{numOfReviews} reviews</span>
    </div>
  )
}