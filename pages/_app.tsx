import { useState } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
    const [dark, setDark] = useState(false)

    const toggleDarkTheme = () => {
        setDark(prev => !prev)
    }

    return (
        <div className={dark ? 'dark' : ''}>
            <Header />
            <button onClick={toggleDarkTheme} className="py-2 px-4 rounded border-gray-300 dark:bg-gray-600 dark:text-gray-100 m-3">
                {dark ? 'ライトON' : 'ダークON'}
            </button>
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp
