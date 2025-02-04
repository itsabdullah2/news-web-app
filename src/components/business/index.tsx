import businessHeroImage from '../../assets/images/bg-2.jpg';
import BusinessNewsCards from './BusinessNewsCards';

const Business = () => {
  return (
    <div className="">
      <div className="">
        <img
          src={businessHeroImage}
          alt="business hero image"
          className="bg-center bg-cover max-h-dvh w-full"
        />
      </div>
      <div className="container px-5 lg:px-0 mt-10 mx-auto flex flex-col gap-12 lg:gap-20 xl:gap-32">
        <BusinessNewsCards />
      </div>
    </div>
  );
};

export default Business;
