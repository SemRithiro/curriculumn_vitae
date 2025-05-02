import React from 'react';

import {Provider as ChakraProvider} from './components/ui/provider';

import './App.css';
import Router from './router';

export default function App() {
    return (
        <ChakraProvider>
            <Router />
        </ChakraProvider>
    );
}
