import { useEffect, useState } from "react";

const CookieManager = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [acceptHover, setAcceptHover] = useState(false);
  const [declineHover, setDeclineHover] = useState(false);

  const text = {
    before: "Este site utiliza cookies. Lê a nossa",
    between: "e a",
    after: "para saberes como tratamos os teus dados.",
    cookies: "Política de Cookies",
    privacy: "Política de Privacidade",
    accept: "Aceitar",
    decline: "Recusar",
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#222",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        fontSize: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "70%" }}>
        {text.before}{" "}
        <a
          href="/cookies"
          style={{ color: "#4ea8de", textDecoration: "underline" }}
        >
          {text.cookies}
        </a>{" "}
        {text.between}{" "}
        <a
          href="/privacy"
          style={{ color: "#4ea8de", textDecoration: "underline" }}
        >
          {text.privacy}
        </a>{" "}
        {text.after}
      </div>
      <div style={{ marginTop: "0.5rem", whiteSpace: "nowrap" }}>
        <button
          onClick={acceptCookies}
          onMouseEnter={() => setAcceptHover(true)}
          onMouseLeave={() => setAcceptHover(false)}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: acceptHover ? "#3b59d1" : "#1e40af",
            border: "none",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {text.accept}
        </button>
        <button
          onClick={declineCookies}
          onMouseEnter={() => setDeclineHover(true)}
          onMouseLeave={() => setDeclineHover(false)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: declineHover ? "#4a4a4a" : "#333333",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {text.decline}
        </button>
      </div>
    </div>
  );
};

export default CookieManager;
