import React, { useRef, useEffect } from "react";
import "./TopDestinationsWidget.css";

function TopDestinationsWidget() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://c111.travelpayouts.com/content?currency=usd&trs=232358&shmarker=438659&powered_by=false&locale=en&from_name=LHR&limit=11&form_background_color=FFFFFF&promo_id=4563';
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
export default TopDestinationsWidget;