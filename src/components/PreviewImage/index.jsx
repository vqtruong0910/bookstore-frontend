import logo from "../../assets/images/—Pngtree—camera icon photography_4015139.png"

function PreviewImage({ fileImage }) {
    return (
        <div className="flex justify-center">
            {
                fileImage ?
                    <img src={fileImage} className="object-contain max-h-40 sm:max-h-28 shadow-md border rounded-sm" alt="preview" />
                    :
                    <img src={logo} className="object-contain w-full max-h-28 shadow-md border rounded-sm" alt="preview" />
            }
        </div>
    );
}

export default PreviewImage;
