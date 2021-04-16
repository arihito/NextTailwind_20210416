import { useState } from 'react'

const Home = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const tabs = [
        { label: 'A', content: 'Aのテキストです' },
        { label: 'B', content: 'Bのテキストです' },
        { label: 'C', content: 'Cのテキストです' },
        { label: 'D', content: 'Dのテキストです' },
    ]

    const isLoggedin = true

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="container py-20 mx-auto">
                <div className="flex space-between space-x-2">
                    {tabs.map((tab, i) => {
                        return (
                            <button onClick={() => setActiveTabIndex(i)}
                                className={`px-4 py-2 border rounded bg-gray-50 ${activeTabIndex === i ? 'bg-blue-600 text-white' : ''}`}>
                                タブ{tab.label}
                            </button>
                        )
                    })}
                </div>
                <div className="px-4 py-2 mb-8 rounded bg-white mt-4 shadow">{tabs[activeTabIndex].content}</div>
                <p className="p-6 my-4 dark:text-gray-100">{isLoggedin && <p>ログインしています</p>}</p>

                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="rounded dark:bg-gray-600 dark:text-gray-100 shadow p-4 bg-white hover:opacity-20">カードです
                    </div>
                    <div className="rounded dark:bg-gray-600 dark:text-gray-100 shadow p-4 bg-white hover:opacity-20">カードです
                    </div>
                    <div className="rounded dark:bg-gray-600 dark:text-gray-100 shadow p-4 bg-white hover:opacity-20">カードです
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
