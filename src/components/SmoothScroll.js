'use client'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function SmoothScroll({ children }) {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (!scrollContainerRef.current) return

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    })

    return () => {
      locomotiveScroll.destroy()
    }
  }, [])

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  )
}