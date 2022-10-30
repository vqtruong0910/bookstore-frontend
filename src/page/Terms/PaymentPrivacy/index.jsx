function PaymentPrivacy() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex flex-col w-full p-4 bg-white mx-4">
                    <span className="w-full text-2xl md:text-4xl text-center font-medium">CHÍNH SÁCH BẢO MẬT THANH TOÁN</span>
                
                    <span className="w-full py-2 text-lg font-medium">1. Cam kết bảo mật</span>
                    <p className="md:text-lg py-1">- Hệ thống thanh toán thẻ được cung cấp bởi các đối tác thanh toán <strong>(“Đối tác cổng thanh toán”)</strong> đã được cấp phép hoạt động hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại Book Store đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.</p>

                    <span className="w-full py-2 text-lg font-medium">2. Quy định bảo mật</span>
                    <p className="md:text-lg py-1">Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn của các Đối tác cổng thanh toán gồm :</p>
                    <p className="md:text-lg py-1">- Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer) bằng cách mã hóa tất cả các thông tin Khách hàng nhập vào.</p>
                    <p className="md:text-lg py-1">- Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</p>
                    <p className="md:text-lg py-1">- Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</p>
                    <p className="md:text-lg py-1">- Tiêu chuản mã hóa MD5 12 bit.</p>
                    <p className="md:text-lg py-1">- Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng Nhà nước Việt Nam.</p>
                    <p className="md:text-lg py-1">Chính sách bảo mật giao dịch trong thanh toán của Book Store áp dụng với Khách hàng :</p>
                    <p className="md:text-lg py-1">- Book Store cung cấp tiện ích lưu giữ Token – chỉ lưu giữ chuối đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho Book Store. Book Store không trực tiếp lưu giữ thông tin thẻ Khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.</p>
                    <p className="md:text-lg py-1">- Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống của Book Store. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.</p>
                    <p className="md:text-lg py-1">- Đối với thẻ nội địa (internet banking), Book Store chỉ lưu trữ mã đơn hàng, mã giao dịch và tên Ngân hàng.</p>
                    <p className="md:text-lg py-1">- Trong trường hợp nếu Khách hàng thông báo/khiếu nại tình trạng thông tin thanh toán của Khách hàng khi mua hàng qua website/ứng dụng của Book Store bị thay đổi, xóa, hủy, sao chép, tiết lộ, di chuyển trái phép hoặc bị chiếm đoạt gây thiệt hại cho Khách hàng thì Book Store sẽ nỗ lực phối hợp với Đối Tác Cổng Thanh Toán để tìm hiểu vấn đề và hỗ trợ xử lý cho đến hoàn tất vấn đề Khách hàng đang đang gặp phải.</p>
                    <p className="md:text-lg py-1">Book Store cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện qua website/ứng dụng của Book Store.</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentPrivacy;