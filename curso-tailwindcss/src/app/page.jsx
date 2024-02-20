import { BodyContent } from 'app/components/BodyContent';
import { Footer } from 'app/components/Footer';
import { Nav } from 'app/components/Header';
import { TabBar } from 'app/components/TabBar';

export default function Home() {
  return (
    <main className='dark:bg-gray-900'>
      <Nav />
      <BodyContent />
      <Footer />
      <TabBar />
    </main>
  );
}
