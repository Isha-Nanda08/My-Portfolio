import React, { useState, useEffect } from 'react';
// import Marquee from './Marque';
import ReviewCard from './ReviewCard';
import '../styles/Marquee.css'; // Add styles for Marquee & ReviewCard

const ReviewsSection = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode detection (simulate color mode)
  useEffect(() => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(matchDarkMode.matches);

    matchDarkMode.addEventListener('change', (e) => {
      setIsDark(e.matches);
    });

    return () => matchDarkMode.removeEventListener('change', () => {});
  }, []);

  // Reviews data
  const reviews = [
    {
      name: 'kiri',
      username: '@kiruba_selvi6',
      body: 'Oooohhh wowww...!!',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Sébastien Chopin',
      username: '@Atinux',
      body: 'You ship 🚢',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Mattia Guariglia',
      username: '@matt_guariglia',
      body: 'Omg 🥰',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Nelson🐐',
      username: '@Mathiasokafor3',
      body: 'Thank you so much for all you do for the Vue/nuxt ecosystem.',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Premdas Vm',
      username: '@premdasvm',
      body: "Man, this is soo good! I've been jealous of React because their ecosystem had Magic UI and other ones like this. Inspira UI is 🔥🙌🏼",
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Pierre',
      username: '@PierreHenryBap',
      body: 'It looks really awesome! Just noticed it a couple of days ago and I can’t wait to try it out.',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
    {
      name: 'Waldemar Enns',
      username: '@WaldemarEnns',
      body: 'Awesome! ⭐️ed it immediately',
      img: 'https://inspira-ui.com/images/x-logo.svg',
    },
  ];

  return (
    <div className="flex w-full max-w-7xl flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="py-12 text-3xl font-semibold sm:text-4xl">
        Loved by community <span className="text-4xl">❤️</span>
      </div>

      {/* Reviews container */}
      <div className="relative h-[430px] w-full overflow-hidden rounded-xl border bg-white shadow-lg dark:bg-background">
        {/* Logo */}
        <div className="absolute left-1/2 top-8 z-20 my-4 -translate-x-1/2 rounded-3xl border bg-white/30 p-3 backdrop-blur-md">
          <img
            src={isDark ? '/logo-dark.svg' : '/logo.svg'}
            alt="Logo"
            width="100"
            height="40"
          />
        </div>

        {/* Center Text */}
        <div className="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl">What are you waiting for?</h3>
          <p className="m-4 text-base sm:text-lg">
            Get started and start building awesome UI 😄
          </p>
          <a
            href="/getting-started/installation"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get Started →
          </a>
        </div>

        {/* Tilted Marquees */}
        <div className="absolute inset-0 overflow-hidden">
          <Marquee
            style={{ transform: 'translateY(-11.5rem) rotate(-16deg)' }}
            reverse={false}
            pauseOnHover={false}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee
            style={{ transform: 'translateY(1rem) rotate(-16deg)' }}
            reverse
            pauseOnHover={false}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee
            style={{ transform: 'translateY(13.5rem) rotate(-16deg)' }}
            reverse={false}
            pauseOnHover={false}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee
            style={{ transform: 'translateY(26rem) rotate(-16deg)' }}
            reverse
            pauseOnHover={false}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-background"></div>
      </div>
    </div>
  );
};

export default ReviewsSection;
