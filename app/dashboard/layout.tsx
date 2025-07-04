import React from 'react'
import Sidebar from '../components/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-gray-50 text-gray-800 font-sans overflow-hidden h-screen'>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 p-8">
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
