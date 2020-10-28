import { useEffect, useState } from 'react';

function useScroll (scrollRangs = 20) {
  const [isScroll,SetScroll] = useState(false)

  function handleScrollEvent(){

    if (window.scrollY > scrollRangs) return SetScroll(true)

    return SetScroll(false)
  }

    useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent)

    return () => document.removeEventListener('scroll',handleScrollEvent)
  }, [])

  return isScroll
}

export default useScroll;