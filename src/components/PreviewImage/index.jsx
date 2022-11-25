import logo from "../../assets/images/—Pngtree—camera_4962548.png"

function PreviewImage({ fileImage }) {
    return (
        <div className="flex justify-center">
            {
                fileImage ?
                    <img src={fileImage} className="object-contain bg-white sm:w-full max-h-80 sm:h-28 shadow-md border rounded-sm" alt="preview" />
                    :
                    <img src={logo} className="object-contain bg-white sm:w-full max-h-80 sm:h-28 shadow-md border rounded-sm" alt="preview" />
            }
        </div>
    );
}

export default PreviewImage;
