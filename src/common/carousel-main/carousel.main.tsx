import { Carousel } from 'react-bootstrap';
import { CarouselModel } from '../models/carouse.model';
import './carousel-main.css';

export const CarouselMain = (props : {
    carouselData:CarouselModel[]
}) => {
    return(
        <Carousel variant="dark" className='carousel-component'>
            {props.carouselData.map(carouselItem => 
                <Carousel.Item key={carouselItem.order}>
                    <img className="d-block w-100" src= {carouselItem.url} alt={carouselItem.title} />
                    <Carousel.Caption>
                    <h3 className="text">{carouselItem.title}</h3>
                    <p className="text-black">{carouselItem.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}