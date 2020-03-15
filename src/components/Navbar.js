import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import Account from './Account';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';

function NavBar() {
  return (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/account">Account</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/product">Product</Link>
					</li>
				</ul>
			</nav>

		<Switch>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/account">
				<Account />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
			<Route path="/product">
				<Product />
			</Route>
        </Switch>

		</div>
	</Router>
  );
}

export default NavBar;
