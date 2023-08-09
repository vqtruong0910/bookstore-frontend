import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import sachphobien from '../../../assets/images/sachphobien.png'
import logo from '../../../assets/images/logo.png'
import { PATH } from '../../../constants/path'
import Card from '../../../components/Card'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import LoadingSkeletonCard from '../../../components/Loading/LoadingSkeletonCard'

const PopularBook = ({ data, settings, loading }) => {
  const { t } = useTranslation()

  return (
    <div className="w-full xl:w-4/5 lg:mx-auto rounded-md border border-gray-200 drop-shadow-md bg-white py-10">
      <div className="flex w-full justify-center items-center pb-2 border-gray-300">
        <div className="flex items-center">
          <img
            src={sachphobien}
            className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700 object-fit"
            alt="best-seller"
          />
          <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-orange-500">
            {t(`Sách phổ biến`)}
          </span>
        </div>
      </div>
      <div className="flex py-2 px-7 text-xl gap-x-3 items-center">
        <img
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border border-slate-400"
          src={logo}
          alt="bookstore"
        />
        <div className="font-lobster">{t(`Bookstore`)}</div>
      </div>

      <div className="w-full">
        {loading ? (
          <Slider {...settings} className="mx-7">
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
          </Slider>
        ) : (
          <Slider {...settings} className="mx-7">
            {data.map((item) => {
              return (
                <Fragment key={item.IDSanPham}>
                  <Card item={item} loading={loading} />
                </Fragment>
              )
            })}
          </Slider>
        )}

        <div className="w-full flex justify-center mt-10">
          <Link
            to={PATH.category.dashboard}
            className="font-semibold text-md border-gray-200 bg-gradient-to-tl from-yellow-300 to-orange-700 text-white hover:opacity-90 rounded-full px-14 py-2"
          >
            {t(`Xem thêm`)}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularBook
