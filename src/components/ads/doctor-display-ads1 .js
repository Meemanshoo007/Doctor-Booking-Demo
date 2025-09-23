import React, { useEffect } from "react";

const DoctorDisplayAds1 = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-7184255003795697"
         data-ad-slot="2467464081"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default DoctorDisplayAds1;
