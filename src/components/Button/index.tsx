import { SFC, useCallback } from 'react'
import PropTypes, { InferProps } from "prop-types";

function Button({ text, onClick }: InferProps<typeof Button.propTypes>) {
  const handleClicked = useCallback(() => {
    if(onClick){
      onClick()
    }
  }, [onClick])

  return (
    <button onClick={handleClicked}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
