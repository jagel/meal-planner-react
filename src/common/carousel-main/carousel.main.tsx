import { CarouselModel } from '../models/carouse.model';
import './carousel-main.css';

export const CarouselMain = (props : {
    carouselData:CarouselModel[]
}) => {
    return(
        <div className='carousel-component'>
            {props.carouselData.map(carouselItem => 
                <img className="d-block w-100" src= {carouselItem.url} alt={carouselItem.title} />
            )}
        </div>
    );
}