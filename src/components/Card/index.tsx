import { useCallback } from 'react'
import PropTypes, { InferProps } from "prop-types";

import CardStyled from './styled'

function Card({ id, img, name, description }: InferProps<typeof Card.propTypes>) {
  return (
    <CardStyled id={id? id: undefined}>
      <div className="avator-container">
        <img src={img? img : undefined} />
      </div>
      <div className="name-container">
        {name}
      </div>
      <div className="description">
        {description}
      </div>
    </CardStyled>
  )
}

Card.defaultProps = {
  img: ""
}

Card.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}

export default Card
