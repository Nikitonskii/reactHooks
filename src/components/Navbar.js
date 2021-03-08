import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
		<div className='navbar-brand'>
			Find at Github
		</div>
		<ul className='navbar-nav'>
			<li className='navbar-item'>
				<NavLink exact to='/' className='nav-link'>Main</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to='/about' className='nav-link'>Info</NavLink>
			</li>
		</ul>
	</nav>
)