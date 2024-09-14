// components/MyScripts.js
import { useEffect } from 'react';

const MyScripts = () => {
  useEffect(() => {
    // Dynamically load scripts
    const loadScript = (src, async = true) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load scripts in sequence
    const loadScripts = async () => {
      try {
        await loadScript('/piece.js');
        await loadScript('/board.js');
        await loadScript('/script.js');
      } catch (error) {
        console.error('Script loading error:', error);
      }
    };

    loadScripts();

    // Clean up scripts on component unmount
    return () => {
      document.querySelectorAll('script[src]').forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <audio id="fourlines" src="/audio/fourlines.wav" />
      <audio id="oneline" src="/audio/oneline.wav" />
      <audio id="gameover" src="/audio/gameover.wav" />
      <span className="hidden hidethis">.</span>
      <span className="hidden2 hidethis">.</span>
    </>
  );
};

export default MyScripts;
