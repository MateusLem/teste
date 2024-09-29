import { useEffect, useState, useRef } from 'react';

function FacebookPageEmbed() {
  const fbContainerRef = useRef(null);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  useEffect(() => {
    const loadFbSdk = () => {
      if (!window.FB) {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          window.FB.init({
            xfbml: true,
            version: 'v10.0',
          });
          setIsSdkLoaded(true);
        };
        document.body.appendChild(script);
      } else {
        setIsSdkLoaded(true);
      }
    };

    loadFbSdk();
  }, []);

  useEffect(() => {
    if (isSdkLoaded && fbContainerRef.current) {
      window.FB.XFBML.parse(fbContainerRef.current);
    }
  }, [isSdkLoaded]);

  return (
    <div ref={fbContainerRef}>
      <div className="fb-page"
        data-href="https://www.facebook.com/grandepremio"
        data-width="700" data-height="450"
        data-hide-cover="false" data-show-facepile="true" data-show-posts="true">
        <blockquote cite="https://www.facebook.com/grandepremio" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/grandepremio">Grande Prêmio</a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookPageEmbed;
