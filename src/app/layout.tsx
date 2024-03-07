import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <title>Data Machina</title>
                <link rel="shortcut icon" href="./logoaba.png" type="image/x-icon" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
