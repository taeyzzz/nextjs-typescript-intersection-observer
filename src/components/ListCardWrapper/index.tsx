import { useCallback, useRef, useEffect, useState } from 'react'
import PropTypes, { InferProps } from "prop-types";

import ListCardWrapperStyled from './styled'

function ListCardWrapper ({ id, children, onLoadMore }: InferProps<typeof ListCardWrapper.propTypes>) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  const [observer, setObserver] = useState<IntersectionObserver | null>(null)

  const handleIntersect = useCallback((entities: IntersectionObserverEntry[]) => {
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
      setObserver(new IntersectionObserver(handleIntersect, options))
    }
  }, [containerRef, setObserver])

  useEffect(() => {
    if(triggerRef && triggerRef.current && observer){
      observer.observe(triggerRef.current)
    }
    return () => {
      if(observer && triggerRef.current){
        observer.unobserve(triggerRef.current)
      }
    }
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
