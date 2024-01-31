import { Header } from '@/components/home/Header';
import '../styles/global.css';
import { RandomFoxContainer } from '@/components/home/RandomFoxContainer/RandomFoxContainer';

export default function Home() {
  return (
    <main>
      <Header />
      <RandomFoxContainer />
    </main>
  );
}
