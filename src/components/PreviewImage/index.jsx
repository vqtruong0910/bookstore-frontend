import logo from "../../assets/images/—Pngtree—camera icon photography_4015139.png"

function PreviewImage({ fileImage }) {
    return (
        <div className="flex justify-center">
            {
                fileImage ?
                    <img src={fileImage} className="object-contain sm:w-full max-h-80 sm:max-h-28 shadow-md border rounded-sm" alt="preview" />
                    :
                    <img src={logo} className="object-contain sm:w-full max-h-80 sm:max-h-28 shadow-md border rounded-sm" alt="preview" />
            }
        </div>
    );
}

export default PreviewImage;
