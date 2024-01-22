import { type MutableRefObject, useEffect } from 'react'

interface useInfiniteScrollOptions {
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
  callback?: () => void
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: useInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '10px 0px',
        threshold: 0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
