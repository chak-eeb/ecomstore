import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductList}></Route>
				<Route path='/details' component={Details}></Route>
				<Route path='/cart' component={Cart}></Route>
				<Route component={Default}></Route>
			</Switch>
		</>
	);
}

export default App;
