import styles from './Banner.module.scss'
import banner from '../../assets/images/banner.png'
import { useEffect, useState } from 'react'

function Banner() {
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading ? (
        <div className="h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-slate-200 w-full xl:w-4/5 mx-auto"></div>
      ) : (
        <div className={`${styles['image-wrapper']} w-full xl:w-4/5 mx-auto z-10`}>
          <img src={banner} alt="Banner" className="block object-cover" />
          <div className={`${styles['overlay']}`}></div>
        </div>
      )}
    </>
  )
}

export default Banner
