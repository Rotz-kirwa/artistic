const artworks = [
  {
    id: 26,
    title: "Mweshimiwa Wesly Korir",
    artist: "BEN-ARTS",
    image: "https://assets.grok.com/users/6e5b3930-9cbb-48d5-9902-a9d6e1512092/generated/0b1d1073-470f-44e6-b494-71a683fd3c7b/image.jpg",
    description: "A dignified portrait capturing the presence and character of Mweshimiwa Wesly Korir.",
    fullDescription: "This artwork honors Mweshimiwa Wesly Korir, reflecting his leadership and inspiring spirit through expressive color and form. A tribute to a respected figure."
  },
  {
    id: 7,
    title: "Madam Boss",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/z2kikv4jqym5thmrd1n4z/IMG-20250621-WA0001.jpg?rlkey=z28jqgesz028ziv8n023k692d&st=8llw8qhg&raw=1",
    description: "A captivating digital artwork blending surreal colors and dreamlike forms.",
    fullDescription: "Dreamscape Vision invites viewers into a world where imagination and reality merge. The vibrant palette and fluid shapes evoke a sense of wonder and exploration, making it a standout piece in any collection."
  },
  {
    id: 25,
    title: "Golden Harmony",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/1nxy315mem0t81aeth3lq/IMG-20250621-WA0018.jpg?rlkey=8istkcajwibk29gk2q9vr357b&st=rosdxyj0&dl=1",
    description: "Warm golden hues blend in a peaceful, harmonious composition.",
    fullDescription: "Golden Harmony radiates tranquility and balance, with soft transitions and a gentle glow that soothes the soul."
  },
  {
    id: 24,
    title: "Mystic Reflections",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/zf3or3doru54omd9mas29/IMG-20250621-WA0019.jpg?rlkey=du0cd773urwa3cb9lzg1o3870&st=gsd5c1q8&dl=1",
    description: "A contemplative piece with deep blues and mysterious forms.",
    fullDescription: "Mystic Reflections invites viewers to ponder the unknown, with layered textures and enigmatic shapes that spark the imagination."
  },
  {
    id: 23,
    title: "Emerald Awakening",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/qdahbjxhi3meepph94fvl/IMG-20250621-WA0017.jpg?rlkey=trde86qx0x700anukhfcyqfra&st=cqxj7mtp&dl=1",
    description: "Lush greens and organic patterns evoke new beginnings.",
    fullDescription: "Emerald Awakening celebrates growth and renewal, with vibrant green tones and flowing lines reminiscent of nature’s vitality."
  },
  {
    id: 22,
    title: "Celestial Bloom",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/byyb5akteuobxq3trqrlx/IMG-20250621-WA0016.jpg?rlkey=1sbkx9kun6gko8e40rf2nf4tz&st=8pqjj2oa&dl=1",
    description: "A cosmic dance of color, light, and floral inspiration.",
    fullDescription: "Celestial Bloom fuses the beauty of flowers with the wonder of the stars, creating a dreamlike, uplifting vision."
  },
  {
    id: 21,
    title: "Vivid Echoes",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/r94pbxvmpqgfh23wuyuyz/IMG-20250621-WA0015.jpg?rlkey=f2mwr4kl9h7v8ksa2doo78wiq&st=ccoycc3z&dl=1",
    description: "Bold colors and rhythmic patterns create a sense of resonance.",
    fullDescription: "Vivid Echoes pulses with energy, its repeating motifs and striking contrasts drawing the viewer into a world of sound and color."
  },
  {
    id: 20,
    title: "Serene Passage",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/d94gt8crqi06b69ei44b6/IMG-20250621-WA0014.jpg?rlkey=k8rn1j8b62kz5tdus01k66yep&st=hhi6ymp5&dl=1",
    description: "Soft gradients and gentle forms suggest a tranquil journey.",
    fullDescription: "Serene Passage offers a meditative escape, with calming colors and smooth transitions that invite peaceful contemplation."
  },
  {
    id: 19,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/74b8e89477yhks6caq3ca/IMG-20250621-WA0013.jpg?rlkey=ayyh42ksxfwu0wq6ivw9qsf5u&st=s0g7y3k3&dl=1",
    description: "A beautiful and expressive new piece, full of color and movement.",
    fullDescription: "This artwork stands out for its vibrant palette and dynamic composition. A wonderful addition to any art collection."
  },
  {
    id: 18,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/ly2hnqi9dwb8z6d7jxv1x/IMG-20250621-WA0012.jpg?rlkey=h40c60q6y9iqqjjvlmbt65h75&st=jx4nzu0z&dl=1",
    description: "A striking new addition, full of color and creative energy.",
    fullDescription: "This piece captivates with its vibrant palette and expressive composition. A perfect highlight for any art collection."
  },
  {
    id: 17,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/0c8k9qsjk2u2tskprq0mz/IMG-20250621-WA0011.jpg?rlkey=df6mb0dm0nlev633anv4kkc7x&st=9x5hdm9w&dl=1",
    description: "A vibrant and expressive new piece, full of life and movement.",
    fullDescription: "This artwork captivates with its bold colors and dynamic composition. A perfect addition for any art lover or collector."
  },
  {
    id: 16,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/ghmyo3c8uvrojpaz7y47z/IMG-20250621-WA0010.jpg?rlkey=xcb8k2qbdzxlb3dmy3ykls6o4&st=z50dvnwa&dl=1",
    description: "A fresh and inspiring addition, full of color and movement.",
    fullDescription: "This piece stands out for its vibrant palette and expressive style. A wonderful highlight for any art collection."
  },
  {
    id: 15,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/iq3o8frq1rttyr9gp32z6/IMG-20250621-WA0009.jpg?rlkey=2j0nfxgn3jjwt7vhjvycfrgdd&st=8zygfd7b&dl=1",
    description: "A mesmerizing new piece, full of depth and artistic flair.",
    fullDescription: "This artwork enchants with its rich colors and thoughtful composition. A beautiful addition to any collection."
  },
  {
    id: 14,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/uqe8qg6z4n1llofq57zo9/IMG-20250621-WA0008.jpg?rlkey=fryqbpr1djr4gh2o6nl5h6ms3&st=1sg05eso&dl=1",
    description: "A stunning new addition, full of color and creative energy.",
    fullDescription: "This piece captivates with its vibrant palette and expressive composition. A perfect highlight for any art collection."
  },
  {
    id: 13,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/weqr8nhea48fnj54eh2a1/IMG-20250621-WA0007.jpg?rlkey=8xj96njkiz6mnp50mvjwa5br8&st=xo7t7w05&dl=1",
    description: "A bold and captivating new piece, rich in color and detail.",
    fullDescription: "This artwork draws the viewer in with its intricate design and expressive energy. A standout addition to any collection."
  },
  {
    id: 12,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/weqr8nhea48fnj54eh2a1/IMG-20250621-WA0007.jpg?rlkey=8xj96njkiz6mnp50mvjwa5br8&st=jo32ul1g&dl=1",
    description: "A bold and captivating new piece, rich in color and detail.",
    fullDescription: "This artwork draws the viewer in with its intricate design and expressive energy. A standout addition to any collection."
  },
  {
    id: 11,
    title: "Early Bird",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/7xwx9w11d5wkajsf83a0t/IMG-20250621-WA0005.jpg?rlkey=v0tdylyxnanc3mwxz6m7uz4mw&st=wjk3josg&dl=1",
    description: "A fresh and expressive addition to the gallery, full of color and movement.",
    fullDescription: "This piece draws the viewer in with its dynamic composition and vibrant palette. A true highlight for any collection."
  },
  {
    id: 10,
    title: "One of a Kind",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/d0mz9l2sba2h33203wrnr/IMG-20250621-WA0004.jpg?rlkey=3tgev9n5oxwfyyah44gxeu6hk&st=rp93fx95&dl=1",
    description: "A vibrant new piece, full of life and artistic energy.",
    fullDescription: "This artwork stands out for its expressive style and captivating presence. A wonderful addition for any art enthusiast or collector."
  },
  {
    id: 9,
    title: "Untitled",
    artist: "BEN",
    image: "https://www.dropbox.com/scl/fi/wz18x4s4g4q4biw296qtn/IMG-20250621-WA0003.jpg?rlkey=7p1bln0i8cqmm3b4zsc4nlr14&st=kp7p29sq&dl=1",
    description: "BEN with his work of art.",
    fullDescription: "This piece captures BEN alongside his creative masterpiece, reflecting his passion, dedication, and unique artistic vision. A celebration of the artist and his journey." 
  },
  {
    id: 8,
    title: "Untitled",
    artist: "BEN-ARTS",
    image: "https://www.dropbox.com/scl/fi/ognhkpj5ej8w1jdgnm2j3/IMG-20250621-WA0002.jpg?rlkey=t20dt3m9ptassc55sw03c877p&st=5ruf4z59&dl=1",
    description: "A unique addition to the gallery, full of vibrant energy and story.",
    fullDescription: "This piece stands out for its color, composition, and the emotion it conveys. A perfect choice for collectors seeking something special."
  },
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "A vibrant sunset painting that captures the essence of dreams and aspirations.",
    fullDescription: "This stunning piece represents the artist's interpretation of hope and new beginnings. The warm colors blend seamlessly to create a sense of peace and tranquility, making it perfect for any modern living space."
  },
  {
    id: 2,
    title: "Urban Symphony",
    artist: "James Chen",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "An abstract representation of city life and its rhythmic patterns.",
    fullDescription: "Urban Symphony explores the chaos and beauty of metropolitan life through bold strokes and dynamic composition. The piece invites viewers to find harmony within the apparent disorder of urban existence."
  },
  {
    id: 3,
    title: "Ocean Whispers",
    artist: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
    description: "A serene seascape that brings the calming sounds of waves to life.",
    fullDescription: "This masterpiece captures the eternal dialogue between sea and sky. The artist's masterful use of blues and whites creates a meditative experience that transports viewers to peaceful coastal shores."
  },
  {
    id: 4,
    title: "Forest Meditation",
    artist: "David Kim",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "A peaceful forest scene that invites contemplation and inner peace.",
    fullDescription: "Forest Meditation is a journey into nature's sanctuary. The interplay of light and shadow through the trees creates a spiritual atmosphere that encourages reflection and mindfulness."
  },
  {
    id: 5,
    title: "Digital Renaissance",
    artist: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "A modern take on classical art forms using digital techniques.",
    fullDescription: "This innovative piece bridges the gap between traditional artistry and modern technology. The artist skillfully combines classical composition with contemporary digital methods to create something entirely new."
  },
  {
    id: 6,
    title: "Emotional Spectrum",
    artist: "Lisa Wang",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
    description: "An exploration of human emotions through color and form.",
    fullDescription: "Emotional Spectrum takes viewers on a journey through the full range of human feelings. Each color and brushstroke represents a different emotional state, creating a powerful visual narrative about the human experience."
  }
];

function Gallery({ onArtClick }) {
  return (
    <div className="gallery-grid">
      {artworks.map((art) => (
        <div
          key={art.id}
          className="art-card"
          onClick={() => onArtClick(art)}
        >
          <img src={art.image} alt={art.title} />
          <div className="art-card-content">
            <h3>{art.title}</h3>
            <p className="artist">by {art.artist}</p>
            <p className="description">{art.description}</p>
            <p className="price-tag">Ksh 2000</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;