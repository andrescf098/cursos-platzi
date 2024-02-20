import { FAQS } from '../FAQS';
import { Home } from '../Home';
import { Recommendation } from '../Recommendations';
import { FeaturedRentals } from '../Rentals';

export const BodyContent = () => {
  return (
    <section className='w-full h-auto'>
      <Home />
      <Recommendation />
      <FeaturedRentals />
      <FAQS />
    </section>
  );
};
