import sportsHeroImage from '../../assets/images/sports.jpg';
import SportsNewsCards from './SportsNewsCards';

const Sports = () => {
  return (
    <div className="">
      <div className="">
        <img
          src={sportsHeroImage}
          alt="sport hero image"
          className="bg-center bg-cover max-h-dvh w-full"
        />
      </div>
      <div className="container px-5 lg:px-0 mt-10 mx-auto flex flex-col gap-12 lg:gap-20 xl:gap-32">
        <SportsNewsCards />
      </div>
    </div>
  );
};

export default Sports;
