import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopNavbar from './scene/global/TopNavbar';
import Sidebar from './scene/global/Sidebar';
import { DashBoard } from './scene';
import { Bar, Calendar, Contacts, Invoices, Line, Pie, FAQ, Form, Geography, Team } from './scene';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [ them, colorMode ] = useMode();

    return (
        <ColorModeContext.Provider value={ colorMode }>
            <ThemeProvider theme={ them }>
                <CssBaseline />
                <div className='app'>
                    <Sidebar />
                    <main className='content'>
                        <TopNavbar />
                        <Routes>
                            <Route path='/' element={ <DashBoard /> } />
                            <Route path="/team" element={ <Team /> } />
                            <Route path="/contacts" element={ <Contacts /> } />
                            <Route path="/invoices" element={ <Invoices /> } />
                            <Route path="/form" element={ <Form /> } />
                            <Route path="/bar" element={ <Bar /> } />
                            <Route path="/pie" element={ <Pie /> } />
                            <Route path="/line" element={ <Line /> } />
                            <Route path="/faq" element={ <FAQ /> } />
                            <Route path="/calendar" element={ <Calendar /> } />
                            <Route path="/geography" element={ <Geography /> } />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;