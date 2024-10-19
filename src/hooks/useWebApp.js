import { useState, useEffect } from 'react';

export function useWebApp() {
  const [webApp, setWebApp] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadWebApp = async () => {
      if (typeof window !== 'undefined') {
        const WebApp = (await import('@twa-dev/sdk')).default;
        setWebApp(WebApp);

        WebApp.ready();
        setIsReady(true);
      }
    };

    loadWebApp();
  }, []);

  return { webApp, isReady };
}
