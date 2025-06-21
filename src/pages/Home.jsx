import { useState } from 'react';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';

function Home() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="benarts-title">BEN-ARTS.</h1>
          <p className="hero-message">
            At our gallery, every brushstroke tells a story — of imagination, culture, and raw human expression.<br/>
            By supporting art, you're not just buying a piece; you're uplifting a dream, fueling creativity, and giving voice to artists who dare to see the world differently.<br/><br/>
            Join us in celebrating and preserving the power of art.<br/>
            <strong>Discover. Connect. Support.</strong><br/><br/>
            Because every masterpiece needs a believer — like you.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="featured-artworks-title">Featured Artworks</h2>
          <Gallery onArtClick={setSelectedArt} />
        </div>
      </section>

      {selectedArt && (
        <Modal art={selectedArt} onClose={() => setSelectedArt(null)} />
      )}
    </div>
  );
}

export default Home;