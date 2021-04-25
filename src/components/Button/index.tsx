import { SFC, useCallback } from 'react'
import PropTypes, { InferProps } from "prop-types";

import ButtonStyled from './styled'

function Button({ text, onClick }: InferProps<typeof Button.propTypes>) {
  const handleClicked = useCallback(() => {
    if(onClick){
      onClick()
    }
  }, [onClick])

  return (
    <ButtonStyled onClick={handleClicked}>
      {text}
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
