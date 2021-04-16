import React from 'react'

const Header = () => {
    return (
        <header className="p-4 shadow flex justify-between items-center border-b dark:bg-gray-600">
            <h1 className="font-bold text-2xl dark:text-gray-100">Next.js + TailwindCSS Tabs & DarkMode</h1>
            <div className="flex items-center space-x-4">
                <a href="">はじめてのFlock</a>
                <a href="">Next.js楽しい</a>
                <a href="">TailwindCSS</a>
                <div className="w-10 h-10 bg-gray-500 rounded-full"></div>

            </div>
        </header>
    )
}

export default Header