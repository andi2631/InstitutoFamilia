import { WHO_WE_ARE } from '../utils/const';

const Hero = () => {
  return (
    <div className="bg-pantone-classic-blue text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Instituto de Ciencias Familiares</h1>
        <p className="mt-6 text-xl max-w-3xl">{WHO_WE_ARE}</p>
      </div>
    </div>
  );
};

export default Hero;