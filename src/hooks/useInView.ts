import { useEffect, useRef, useState } from 'react'

const options: IntersectionObserverInit = {
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1,
}

export function useInView() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
