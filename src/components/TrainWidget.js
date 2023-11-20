import React, { useRef, useEffect } from "react";
import "./TrainWidget.css";

function TrainWidget() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://tp.media/content?currency=usd&trs=232358&shmarker=438659&type=compact&host=search.hotellook.com&locale=en&limit=10&powered_by=true&nobooking=&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101';
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
export default TrainWidget;