import { useEffect, useState } from "react";
import { CarouselData } from "./CarouselData";
import { PATH } from "../../constants/path"
import { Link } from 'react-router-dom';

function ListProduct() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const delay = 3000;
    const imgSlide = CarouselData;
    const length = imgSlide.length;
    
    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? length-1 : currentSlide-1)
    // }

    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === length-1 ? 0 : currentSlide+1 )
    // }


    useEffect(() => {
        setTimeout(
            () =>
                setCurrentSlide((nextSlide) =>
                    nextSlide === length - 1 ? 0 : currentSlide + 1
                ),
            delay
        );
    
        return () => {};
      }, [currentSlide, length]);


    if (!Array.isArray(imgSlide) || imgSlide.length <= 0) {
        return null;
    }


    return(
        <section className="w-full mt-3 md:mt-0 md:relative">
            {imgSlide.map((item,index) => {
                return (
                    <Link to={PATH.detail_book} key={index} className={`w-full select-none relative aspect-w-16 aspect-h-9 ${index === currentSlide ? 'active' : 'hidden'}`}>
                        <img className="w-full" src={item.image} alt="Carousel image" />
                    </Link>

                )

            })}

        </section>
    )
}

export default ListProduct;