export const Footer = () => {
    return (
        <footer className="mt-auto py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Evita mensajes que inciten al odio o agredan a las personas.</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                        © 2024 JRLIA - Powered by Jhonny Ramos
                    </div>
                </div>
            </div>
        </footer>
    )
}

