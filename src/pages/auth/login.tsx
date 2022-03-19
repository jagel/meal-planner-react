import { CarouselMain } from '../../common/carousel-main/carousel.main';
import { LoginForm } from '../../components/authentication/login.form';
import LoginNavBar from '../../components/navigation/login-nav-bar';
import { HomeCarouselData } from '../../utils/data/home-carousel';
import './login.css'

export function Login(){
  let carouselData = HomeCarouselData;
  
  return (
  <>
    
    <LoginNavBar />

    <div className='form-page'>
      
      <div className='descriptive-container'>      
        <div className='descriptive-item'>
          <CarouselMain carouselData={carouselData} />
        </div>
      </div>

      <div className='form-container'>
        <div className='login-form'>
          <LoginForm />
        </div>
      </div>
      
    </div>

    <footer>
      Footer
    </footer>

  </>
  );
}