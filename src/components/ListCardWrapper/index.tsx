import { useCallback, useRef, useEffect } from 'react'
import PropTypes, { InferProps } from "prop-types";

import ListCardWrapperStyled from './styled'

function ListCardWrapper ({ id, children, onLoadMore }: InferProps<typeof ListCardWrapper.propTypes>) {
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  const observer = useRef(null)

  const handleIntersect = useCallback((entities) => {
    entities.forEach((e: IntersectionObserverEntry) => {
      if(e.target === triggerRef.current && e.isIntersecting && onLoadMore){
        onLoadMore()
      }
    })
  }, [triggerRef, onLoadMore])

  useEffect(() => {
    if(containerRef && containerRef.current){
      const options = {
        root: containerRef.current,
        rootMargin: "0px",
        threshold: 1
      }
      observer.current = new IntersectionObserver(handleIntersect, options)
    }
  }, [containerRef, observer])

  useEffect(() => {
    if(triggerRef && triggerRef.current && observer.current){
      observer.current.observe(triggerRef.current)
    }
    return () => observer.current.unobserve(triggerRef.current)
  }, [observer, triggerRef])

  return (
    <ListCardWrapperStyled id={id? id: undefined} ref={containerRef}>
      {children}
      <div ref={triggerRef} />
    </ListCardWrapperStyled>
  )
}

ListCardWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.array]),
  onLoadMore: PropTypes.func
}

export default ListCardWrapper
