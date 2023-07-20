import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Product from './pages/product'
import { Route, Routes } from 'react-router';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<Routes>
					<Route path='' element={<Home />}/>
					<Route path='product' element={<Product />}/>
				</Routes>

			</main>
		</div>
	);
}

export default App;
