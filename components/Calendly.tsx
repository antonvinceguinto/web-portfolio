import { useEffect } from 'react';

declare global {
    interface Window {
        Calendly: any;
    }
}

function Calendly() {
  useEffect(() => {
    // Add CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/antonguinto/30min-meet',
          text: 'Book a 30min meeting',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: undefined,
        });
      }
    };

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Calendly;
