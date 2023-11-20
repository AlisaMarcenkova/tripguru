import React, { useRef, useEffect } from "react";
import "./WidgetCarRentals.css";

function WidgetCarRentals() {
  const scriptRef = useRef();

  useEffect(() => {
    const currentScriptRef = scriptRef.current;
    const script = document.createElement('script');
    script.src = 'https://tp.media/content?trs=232358&shmarker=438659&locale=en&powered_by=false&border_radius=5&plain=true&show_logo=false&color_background=%23ffca28&color_button=%2355a539&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10';
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
export default WidgetCarRentals;