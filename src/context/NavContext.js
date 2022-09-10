import React, {createContext, useState,useContext } from 'react';

 const NavContext = createContext();

export const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export const CustomNavContext=()=>{
    return useContext(NavContext)
}