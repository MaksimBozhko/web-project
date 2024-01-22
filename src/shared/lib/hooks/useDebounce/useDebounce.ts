import { useCallback, useRef } from 'react'

export const useDebounce = (callback: (...arg: any) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout>()

  return useCallback((...arg: any) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback(...arg)
    }, delay)
  }, [callback, delay])
}
