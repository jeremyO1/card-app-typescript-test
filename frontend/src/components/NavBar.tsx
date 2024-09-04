import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../utilities/themeContext';

export default function NavBar() {
    const themeContext = useContext(ThemeContext);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = themeContext;

    const handleSettingsToggle = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <nav className="flex items-center p-4 w-full">
            <div className="flex-grow flex justify-center">
                <div className="flex gap-5">
                    <NavLink className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white" to={'/'}>All Entries</NavLink>
                    <NavLink className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white" to={'/create'}>New Entry</NavLink>
                </div>
            </div>
            <div className="relative ml-auto">
                <button
                    onClick={handleSettingsToggle}
                    className="p-2"
                    style={{
                        backgroundColor: 'var(--button-background-color)',
                        color: 'var(--button-text-color)'
                    }}
                >
                    Settings
                </button>
                {isSettingsOpen && (
                    <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-lg">
                        <button
                            onClick={toggleTheme}
                            className="block w-full text-left p-2 hover:bg-gray-100"
                            style={{
                                backgroundColor: 'var(--button-background-color)',
                                color: 'var(--button-text-color)'
                            }}
                        >
                            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

