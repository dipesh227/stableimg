import CookieConsentBanner from '../components/CookieConsent'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <CookieConsentBanner />
            </body>
        </html>
    )
}

// manifest: '/site.webmanifest',
