import React, { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi';

const UpButton = () => {
  const [isVisibale, setIsVisibale] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const listenToScroll = () => {
    let heightHidden = 300;
    const windScren = document.body.scrollTop || document.documentElement.scrollTop;
    if (windScren > heightHidden) {
      setIsVisibale(true)
    }
    else {
      setIsVisibale(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <div className='relative  z-50'>

      {
        isVisibale && (
          <div className=' text-xl bg-green-600 text-white p-3 rounded-full bottom-10 right-10 hover:bg-green-700 transition-all duration-300 fixed' onClick={goToBtn}>
            <BiUpArrowAlt />
          </div>

        )
      }
    </div>
  )
}

export default UpButton