import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <AppRouter />
    );
}

export default App;
