import { useEffect } from 'react';

const MetaPixel = ({ pixelId }) => {
  useEffect(() => {
    // Función para inicializar el Meta Pixel base script
    const initializePixel = () => {
      // Añade el script base del Meta Pixel al head
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      // Inicializa con tu ID
      fbq('init', pixelId);
      // Envía un PageView por defecto
      fbq('track', 'PageView');
    };

    // Añade la versión noscript (img tag)
    const addNoScriptPixel = () => {
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
      
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    };

    // Ejecuta ambas funciones
    initializePixel();
    addNoScriptPixel();

    // Limpieza al desmontar (opcional)
    return () => {
      // Técnicamente no podemos eliminar completamente el pixel una vez cargado
      // pero podríamos realizar alguna limpieza si es necesario
    };
  }, [pixelId]);

  // Este componente no renderiza nada visible
  return null;
};

export default MetaPixel;