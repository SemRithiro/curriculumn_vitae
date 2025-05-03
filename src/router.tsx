import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './views';

export default function Router() {
	return (
		<BrowserRouter basename='/curriculumn_vitae'>
			<Routes>
				<Route path='/' element={<Index />} />

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}
