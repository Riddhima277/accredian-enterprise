'use client';
import { useEffect, useState } from 'react';

const PHRASES = [
  'Turn your workforce into AI experts.',
  'IIT-certified programs for enterprise teams.',
  'From 10 to 10,000 — scale learning effortlessly.',
  'Real projects. Real skills. Real ROI.',
  'Your dedicated L&D partner, end to end.',
];

export default function TypewriterHero() {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => { setCharIdx(c => c + 1); setText(phrase.slice(0, charIdx + 1)); }, 55);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => { setCharIdx(c => c - 1); setText(phrase.slice(0, charIdx - 1)); }, 28);
      } else {
        setDeleting(false);
        setPhraseIdx(p => (p + 1) % PHRASES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <div className="text-blue-200 text-lg font-medium mb-2 min-h-[28px]">
      {text}
      <span className="inline-block w-0.5 h-5 bg-blue-300 ml-0.5 align-middle animate-pulse" />
    </div>
  );
}
