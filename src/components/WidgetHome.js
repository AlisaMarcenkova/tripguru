import React, { useRef, useEffect } from "react";
import "./WidgetHomeStyles.css";

function WidgetHome() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://tp.media/content?currency=usd&trs=232358&shmarker=438659&show_hotels=true&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&color_button=%238EC76DFF&color_icons=%238EC76DFF&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%238EC76DFF&border_radius=30&plain=true&promo_id=7879&campaign_id=100';
    script.async = true;

    // Attach the script to the ref element
    currentScriptRef.appendChild(script);

    return () => {
      // Check if the scriptRef is still defined before attempting to remove the script
      if (currentScriptRef) {
        currentScriptRef.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {/* Your page content */}
      <div ref={scriptRef} className="widget-container"></div>
    </div>
  );
}
export default WidgetHome;
