import React, { useContext } from 'react';
import { CustomNavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(CustomNavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			{navLinkId}
		</span>
	);
};

export default NavLink;