import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { WELCOME_AUDIO_TEXT } from '../constants';

const WelcomeAudio: React.FC = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const hasInteractedRef = useRef(false);

  const speak = () => {
    if (hasPlayed || isMuted) return;

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(WELCOME_AUDIO_TEXT);
      utterance.lang = 'hi-IN'; // Attempt Hindi
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      // Try to find a Hindi voice
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi'));
      if (hindiVoice) utterance.voice = hindiVoice;

      window.speechSynthesis.speak(utterance);
      setHasPlayed(true);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        speak();
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => {
          setIsMuted(!isMuted);
          if (isMuted) setHasPlayed(false); // Reset to allow play on unmute
        }}
        className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all hover:scale-110"
        title={isMuted ? "Unmute Welcome Sound" : "Mute Welcome Sound"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default WelcomeAudio;