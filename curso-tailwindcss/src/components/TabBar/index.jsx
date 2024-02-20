import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faMoon,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const TabBar = () => {
  return (
    <section
      className='w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex gap-8 items-center justify-evenly lg:hidden dark:bg-gray-800'
      id='tab-bar'
    >
      <Link href='#home'>
        <FontAwesomeIcon className='w-[30px] text-gray-300' icon={faHouse} />
      </Link>
      <Link href='#featured-rentals'>
        <FontAwesomeIcon
          className='w-[30px] text-primary'
          icon={faMagnifyingGlass}
        />
      </Link>
      <Link href='#recommendation'>
        <FontAwesomeIcon
          className='w-[30px] h-[30px] text-gray-300'
          icon={faHeart}
        />
      </Link>
      <button>
        <FontAwesomeIcon
          className='w-[30px] h-[30px] text-gray-300'
          icon={faMoon}
        />
      </button>
      <Link href=''>
        <FontAwesomeIcon
          className='w-[30px] h-[30px] text-gray-300'
          icon={faUser}
        />
      </Link>
    </section>
  );
};
