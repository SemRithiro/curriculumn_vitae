import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views';

export default function Router() {
	return (
		<BrowserRouter basename='/basename'>
			<Routes>
				<Route path='/' element={<Index />} />
			</Routes>
		</BrowserRouter>
	);
}
