import { useState } from 'react';
import Hero from './components/Hero';
import TextToVideo from './components/TextToVideo';
import ImageToVideo from './components/ImageToVideo';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'text' | 'image'

  return (
    <div className="min-h-screen bg-[#0a0b10] text-white flex flex-col">
      {view === 'home' && (
        <Hero onSelect={(v) => setView(v)} />
      )}

      {view === 'text' && (
        <TextToVideo onBack={() => setView('home')} />
      )}

      {view === 'image' && (
        <ImageToVideo onBack={() => setView('home')} />
      )}

      <Footer />
    </div>
  );
}

export default App;
