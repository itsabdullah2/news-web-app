import hero from '../../assets/images/bg-2.jpg';
import BusinessSampleNews from './BusinessSampleNews';
import GeneralNews from './GeneralNews';
import SportSamplesNews from './SportSampleNews';

const Home = () => {
  return (
    <div className="">
      <div className="">
        <img
          src={hero}
          alt="hero image"
          className="bg-center bg-cover max-h-dvh w-full"
        />
      </div>
      <div className="container px-5 lg:px-0 mt-10 mx-auto flex flex-col gap-12 lg:gap-20 xl:gap-32">
        <SportSamplesNews />
        <BusinessSampleNews />
        <GeneralNews />
      </div>
    </div>
  );
};

export default Home;
