import mediumZoom from 'medium-zoom';

console.log("‼️ zoom.js byl načten");

function activateZoom() {
  console.log("⛳ zoom.js funkce spuštěna");

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const zoom = mediumZoom('img.img_ev3q', {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.85)',
        scrollOffset: 0,
      });
      console.log('✅ mediumZoom ručně aktivován', zoom);
    }, 1000);
  }
}

activateZoom();