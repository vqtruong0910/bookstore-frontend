import { useTranslation } from 'react-i18next'

function WholesaleCustomerPolicy() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row">
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full p-4 bg-white border border-gray-200 mx-4">
          <span className="w-full text-2xl md:text-4xl text-center font-medium text-slate-700">
            {t(`CHÍNH SÁCH KHÁCH MUA SỈ`)}
          </span>
          <span className="w-full py-5 text-lg">
            {t(
              `Hiện nay, do mức chiết khấu trên Book Store rất cao, đặc biệt vào các thời điểm chạy chương trình. `
            )}
            {t(
              `Do đó đối với mỗi chương trình số lượng sản phẩm giảm sốc có giới hạn nhất định, vì vậy để đảm bảo quyền lợi của từng khách hàng, chúng tôi xin thông báo tiêu chí xét “Đơn Hàng Sỉ” và chính sách như sau :`
            )}
          </span>
          <span className="w-full py-1 text-lg">
            <strong>1.</strong>
            {t(
              `Đơn hàng được gọi là “đơn hàng sỉ” khi có tổng giá trị các đơn hàng trong 1 ngày có giá trị: từ `
            )}
            <strong>3.000.000</strong>
            {t(` đồng (Ba triệu đồng) trở lên.`)}
          </span>
          <p className="md:text-lg py-1">
            -
            {t(
              ` Các đơn hàng có cùng thông tin người mua hàng (cùng số điện thoại, cùng email hoặc cùng địa chỉ nhận hàng) thì được tính là đơn hàng của 1 khách hàng.`
            )}
          </p>

          <span className="w-full py-1 text-lg">
            <strong>2.</strong>
            {t(
              `Chính sách giá (% chiết khấu giảm giá). Đây là chính sách chung chỉ mang tính tương đối. Xin quý khách vui lòng liên lạc với Fahasa để có chính sách giá chính xác nhất :`
            )}
          </span>
          <p className="md:text-lg py-1">
            - {t(` Đối với Nhóm hàng sách `)}
            <strong> {t(`kinh tế, Văn học`)}</strong> :
            {t(` áp dụng mức giảm giá trên web tối đa không vượt quá 30%.`)}
          </p>
          <p className="md:text-lg py-1">
            - {t(` Đối với Nhóm hàng sách `)}
            <strong> {t(`thiếu nhi và tâm lý kỹ năng`)}</strong> :{' '}
            {t(` áp dụng mức giảm giá trên web tối đa không vượt quá 20%.`)}
          </p>
          <p className="md:text-lg py-1">
            - {t(` Đối với Nhóm hàng sách `)}
            <strong> {t(`còn lại`)}</strong> :{' '}
            {t(` áp dụng mức giảm giá trên web tối đa không vượt quá 10%.`)}
          </p>

          <span className="w-full py-5 text-lg">
            {t(
              `Quý khách có nhu cầu mua sỉ, vui lòng liên hệ phòng kinh doanh Book Store: 1900 63 64 67 hoặc Email: BookStoreCSKH@gmail.com.`
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WholesaleCustomerPolicy
