import CookieConsent from "react-cookie-consent";
// @ts-ignore
export default function CookieConsentBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="I understand"
            cookieName="myWebsiteCookieConsent"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>
                This bit of text is smaller :O
            </span>
        </CookieConsent>
    );
}
