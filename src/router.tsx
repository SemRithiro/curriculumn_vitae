import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/portfolio' element={<Index />} />
			</Routes>
		</BrowserRouter>
	);
}
