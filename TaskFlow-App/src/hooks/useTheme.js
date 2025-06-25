import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};

export default useTheme;