import { useEffect, useRef } from 'react';

function FacebookPageEmbed() {
  const fbRef = useRef(null);

  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return (
    <div>
      {/* Facebook root div for the SDK */}
      <div id="fb-root"></div>
      
      {/* Embedding the Facebook Page */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/grandepremio"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        ref={fbRef}
      >
        <blockquote
          cite="https://www.facebook.com/grandepremio"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/grandepremio">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookPageEmbed;