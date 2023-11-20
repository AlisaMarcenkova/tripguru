import React, { useRef, useEffect } from "react";
import "./FlightsCalendarWidget.css";

function FlightCalendarWidget() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://tp.media/content?currency=usd&trs=232358&shmarker=438659&searchUrl=search.jetradar.com&locale=en_us&powered_by=false&origin=RIX&destination=DXB&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23EDFAEAff&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100';
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
export default FlightCalendarWidget;