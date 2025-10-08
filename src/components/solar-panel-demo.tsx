'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

// Conținut specific pentru curățarea panourilor solare
const solarPanelContent: MediaContentCollection = {
  video: {
    src: '/video/test-video-1.mp4', // Video local de curățare panouri
    poster: '/assets/hero_worker.jpg', // Imagine locală poster
    background: '/assets/download 5555.png', // Fundal local
    title: 'Curățare Panouri Solare',
    date: 'Servicii Profesionale',
    scrollToExpand: 'Derulează pentru a vedea procesul',
    about: {
      overview:
        'Descoperă procesul nostru profesional de curățare a panourilor solare. Folosim tehnologii avansate și produse biodegradabile pentru a maximiza eficiența instalațiilor tale solare. Fiecare panou este tratat cu grijă pentru a asigura performanța optimă.',
      conclusion:
        'Cu peste 5 ani de experiență în domeniu, BUBBLE CLEAN SRL oferă servicii de curățare panouri solare de cea mai înaltă calitate în Republica Moldova. Rezultatele sunt vizibile imediat după curățare.',
    },
  },
  image: {
    src: '/assets/20250913_1354_Curățare Panouri Solare_simple_compose_01k51b8bgfeyxstaq9jw5br325.png', // Imagine locală
    background: '/assets/download 5555.png', // Fundal local
    title: 'Panouri Solare Curate',
    date: 'Rezultate Garantate',
    scrollToExpand: 'Derulează pentru a vedea beneficiile',
    about: {
      overview:
        'Panourile solare curate pot crește producția de energie cu până la 15%. Procesul nostru de curățare include eliminarea prafului, poluării și depunerilor care reduc eficiența instalațiilor solare.',
      conclusion:
        'Investește în curățarea profesională a panourilor solare pentru a maximiza rentabilitatea instalației tale. Contactează-ne pentru o ofertă personalizată.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = solarPanelContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
        Despre Serviciile Noastre
      </h2>
      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.overview}
      </p>

      <div className='grid md:grid-cols-2 gap-8 mb-8'>
        <div className='bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
            🧽 Proces de Curățare
          </h3>
          <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
            <li>• Inspecție detaliată a panourilor</li>
            <li>• Curățare cu apă osmozată</li>
            <li>• Produse biodegradabile</li>
            <li>• Verificare finală a performanței</li>
          </ul>
        </div>
        
        <div className='bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
            ⚡ Beneficii
          </h3>
          <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
            <li>• +15% producție de energie</li>
            <li>• Prețuri competitive</li>
            <li>• Garanție de calitate</li>
            <li>• Echipament profesional</li>
          </ul>
        </div>
      </div>

      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.conclusion}
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a 
          href='#booking' 
          className='rainbow-btn text-center'
        >
          Programează Curățarea
        </a>
        <a 
          href='tel:+37379535178' 
          className='btn secondary text-center'
        >
          📞 079 535 178
        </a>
      </div>
    </div>
  );
};

export const VideoExpansionSolar = () => {
  const mediaType = 'video';
  const currentMedia = solarPanelContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionSolar = () => {
  const mediaType = 'image';
  const currentMedia = solarPanelContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = solarPanelContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = solarPanelContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const SolarPanelDemo = () => {
  const [mediaType, setMediaType] = useState('video');
  const currentMedia = solarPanelContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      <div className='fixed top-4 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Imagine
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default SolarPanelDemo;
