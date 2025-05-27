import React, {useEffect} from 'react';
import OriginalLayout from '@theme-original/Layout';
import mediumZoom from 'medium-zoom';

export default function Layout(props) {
  useEffect(() => {
    const zoom = mediumZoom('article img:not(em img)', {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.85)',
      scrollOffset: 0,
    });

    return () => zoom.detach();
  }, []);

  return <OriginalLayout {...props} />;
}