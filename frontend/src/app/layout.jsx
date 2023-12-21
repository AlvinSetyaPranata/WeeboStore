'use client'

import '@/app/globals.css'
import Alert from '@/components/Atoms/Alert'
import AlertProvider from '@/context/AlertContext'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* <Alert title="Hello" messege="this is messege" /> */}
                <AlertProvider>
                    {children}
                </AlertProvider>
            </body>
        </html>
    )
}
