import Head from "next/head";
import { useEffect } from "react";
import { initGame } from '@/components/main';
import { useWebApp } from '@/hooks/useWebApp';

export default function Home() {
  const { webApp, isReady } = useWebApp();

  useEffect(() => {
    if (webApp && isReady) {
      console.log('WebApp is ready:', webApp);
      
      // Initialize your game
      initGame();
    }
  }, [webApp, isReady]);

  return (
    <>
      <Head>
        <title>Your Game</title>
        <meta name="description" content="Your game description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="game-container" style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}
