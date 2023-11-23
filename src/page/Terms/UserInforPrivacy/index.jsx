import { useTranslation } from 'react-i18next'

function UserInforPrivacy() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row">
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full p-4 bg-white border border-gray-200 mx-4">
          <span className="w-full text-2xl md:text-4xl text-center font-medium text-slate-700">
            {t(`CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG`)}
          </span>

          <p className="md:text-lg py-3">
            <strong className="text-slate-700">Book Store</strong>
            {t(
              ` mong muốn đem lại một tiện ích mua hàng trực tuyến tin cậy, tiết kiệm và thấu hiểu người dùng. Chúng tôi nhận thấy khách hàng sử dụng website `
            )}
            <strong className="text-slate-700">Book Store</strong>
            {t(
              ` để mua sắm nhưng không phải ai cũng mong muốn chia sẻ thông tin cá nhân của mình. Chúng tôi, Công ty `
            )}
            <strong className="text-slate-700">Book Store</strong>,
            {t(
              ` tôn trọng quyền riêng tư của khách hàng và cam kết bảo mật thông tin cá nhân của khách hàng khi khách hàng tin vào chúng tôi cung cấp thông tin cá nhân của khách hàng cho chúng tôi khi mua sắm tại website `
            )}
            <strong className="text-slate-700">Book Store</strong>.
            {t(` Đây là nguyên tắc khi tiếp cận quyền riêng tư, thông tin cá nhân tại website `)}
            <strong className="text-slate-700">Book Store</strong>.
          </p>
          <p className="md:text-lg py-3">
            {t(` Chính Sách Bảo Mật Thông Tin Cá Nhân này bao gồm các nội dung :`)}
          </p>
          <p className="md:text-lg py-1">1. {t(`Sự Chấp Thuận`)}</p>
          <p className="md:text-lg py-1">2. {t(`Thời Gian Lưu Trữ`)}</p>
          <p className="md:text-lg py-1">3. {t(`An Toàn Dữ Liệu`)}</p>
          <p className="md:text-lg py-1">
            4. {t(`Quyền Của Khách Hàng Đối Với Thông Tin Cá Nhân`)}
          </p>
          <p className="md:text-lg py-1">5. {t(`Hiệu lực`)}</p>

          <span className="w-full py-2 text-lg font-medium">1. {t(`Sự Chấp Thuận`)}</span>
          <p className="md:text-lg py-1">
            {t(`Bằng việc trao cho chúng tôi thông tin cá nhân của bạn, `)}
            <strong className="text-slate-700">Book Store</strong>
            {t(
              ` đồng ý rằng thông tin cá nhân của bạn sẽ được thu thập, sử dụng như được nêu trong Chính Sách này.`
            )}
          </p>

          <span className="w-full py-2 text-lg font-medium">2. {t(`Thời Gian Lưu Trữ`)}</span>
          <p className="md:text-lg py-1">
            {t(
              `Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy bỏ. Trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được bảo mật trên máy chủ của Book Store.`
            )}
          </p>

          <span className="w-full py-2 text-lg font-medium">3. {t(`An Toàn Dữ Liệu`)}</span>
          <p className="md:text-lg py-1">
            {t(
              `Chúng tôi luôn nỗ lực để giữ an toàn thông tin cá nhân của khách hàng, chúng tôi đã và đang thực hiện nhiều biện pháp an toàn, bao gồm :`
            )}
          </p>
          <p className="md:text-lg py-1">
            -
            {t(
              ` Bảo đảm an toàn trong môi trường vận hành: chúng tôi lưu trữ không tin cá nhân khách hàng trong môi trường vận hành an toàn và chỉ có nhân viên, đại diện và nhà cung cấp dịch vụ có thể truy cập trên cơ sở cần phải biết. Chúng tôi tuân theo các tiêu chuẩn ngành, pháp luật trong việc bảo mật thông tin cá nhân khách hàng.`
            )}
          </p>
          <p className="md:text-lg py-1">
            -
            {t(
              ` Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời và thông báo cho khách hàng được biết.`
            )}
          </p>
          <p className="md:text-lg py-1">
            - {t(` Các thông tin thanh toán: được bảo mật theo tiêu chuẩn ngành.`)}
          </p>

          <span className="w-full py-2 text-lg font-medium">
            4. {t(`Quyền Của Khách Hàng Đối Với Thông Tin Cá Nhân`)}
          </span>
          <p className="md:text-lg py-1">
            {t(
              `Khách hàng có quyền cung cấp thông tin cá nhân cho chúng tôi và có thể thay đổi quyết định đó vào bất cứ lúc nào. Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu chúng tôi thực hiện việc này.`
            )}
          </p>

          <span className="w-full py-2 text-lg font-medium">
            5.
            {t(
              ` Hiệu lực Chính Sách Bảo Mật Thông Tin Cá Nhân này có hiệu lực từ ngày 01/07/2022.`
            )}
          </span>
          <p className="md:text-lg py-1"></p>
        </div>
      </div>
    </div>
  )
}

export default UserInforPrivacy
