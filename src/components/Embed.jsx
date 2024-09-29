import React, { useEffect } from 'react';

const FacebookPageEmbed = () => {
  useEffect(() => {
    // Carregar o SDK do Facebook
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0';
      script.onload = () => {
        window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/grandepremio"
        data-height="450"
        data-width="700"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-show-posts="true"
      >
        <blockquote
          cite="https://www.facebook.com/grandepremio"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/grandepremio">Grande Prêmio</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPageEmbed;

