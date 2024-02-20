import {
  faMagnifyingGlass,
  faMoon,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Nav = () => {
  return (
    <header>
      <nav className='w-full h-14 bg-white pl-4 hidden lg:flex justify-between items-center fixed z-10 dark:bg-gray-800'>
        <div className='h-auto w-auto'>
          <p className='text-xl text-primary font-bold dark:text-white'>
            Platzi Travel
          </p>
        </div>
        <div className='flex gap-8'>
          <Link href='#home' className='text-md text-primary dark:text-white'>
            Inicio
          </Link>
          <Link
            href='#recommendation'
            className='text-md text-primary dark:text-white'
          >
            Recomendados
          </Link>
          <Link
            href='#featured-rentals'
            className='text-md text-primary dark:text-white'
          >
            Rentas
          </Link>
          <Link href='#faqs' className='text-md text-primary dark:text-white'>
            FAQS
          </Link>
          <Link
            href='#aboutUs'
            className='text-md text-primary dark:text-white'
          >
            Sobre nosotros
          </Link>
        </div>
        <div className='flex gap-4 pr-4'>
          <Link href='#featured-rentals'>
            <FontAwesomeIcon
              className='w-[20px] h-[20px] text-primary dark:text-white'
              icon={faMagnifyingGlass}
            />
          </Link>
          <button>
            <FontAwesomeIcon
              className='w-[20px] h-[20px] text-primary dark:text-white'
              icon={faMoon}
            />
          </button>
          <Link href=''>
            <FontAwesomeIcon
              className='w-[20px] h-[20px] text-gray-300'
              icon={faUser}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
