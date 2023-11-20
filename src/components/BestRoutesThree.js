import React, { useRef, useEffect } from "react";
import "./BestRoutes.css";

function BestRoutesThree() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://tp.media/content?currency=usd&trs=232358&shmarker=438659&destination=SIN&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&width=260&primary=%230085FF&promo_id=4044&campaign_id=100';
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
export default BestRoutesThree;