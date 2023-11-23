import { useTranslation } from 'react-i18next'

function Transport() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row">
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full p-4 bg-white border border-gray-200 mx-4">
          <span className="w-full text-2xl md:text-4xl text-center font-medium text-slate-700">
            {t(`CHÍNH SÁCH VẬN CHUYỂN/ĐÓNG GÓI`)}
          </span>
          <span className="font-medium text-center py-2">
            {t(`Áp dụng cho toàn bộ đơn hàng của Quý Khách tại `)}
            <strong className="text-slate-700">Book Store</strong>
          </span>

          <span className="w-full text-lg font-medium py-3">{t(`Chính sách vận chuyển :`)}</span>
          <p className="md:text-lg">
            <strong className="text-slate-700">Book Store</strong>{' '}
            {t(
              ` cung cấp dịch vụ giao hàng toàn quốc, gửi hàng tận nơi đến địa chỉ cung cấp của Quý khách. Thời gian giao hàng dự kiến phụ thuộc vào kho có hàng và địa chỉ nhận hàng của Quý khách.`
            )}
          </p>
          <p className="md:text-lg">
            {t(`Với đa phần đơn hàng, `)}
            <strong className="text-slate-700">Book Store</strong>
            {t(
              ` cần vài giờ làm việc để kiểm tra thông tin và đóng gói hàng. Nếu các sản phẩm đều có sẵn hàng, `
            )}
            <strong className="text-slate-700">Book Store</strong>
            {t(
              ` sẽ nhanh chóng bàn giao cho đối tác vận chuyển. Nếu đơn hàng có sản phẩm sắp phát hành, `
            )}
            <strong className="text-slate-700">Book Store</strong>
            {t(` sẽ ưu tiên giao những sản phẩm có hàng trước cho Quý khách hàng.`)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Transport
