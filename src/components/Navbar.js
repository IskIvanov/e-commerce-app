import React from 'react';
import Account from './Account';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';

function NavBar() {
  return (
    <div>
		<nav>
			<ul>
				<li><Account/></li>
				<li><Home/></li>
				<li><Cart/></li>
				<li><Product/></li>
			</ul>
		</nav>
    </div>
  );
}

export default NavBar;
