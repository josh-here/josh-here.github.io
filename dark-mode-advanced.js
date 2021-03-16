/*
 * Adjusted version of https://codepen.io/bramus/pen/jObmydd
 * Demo for https://www.bram.us/2020/04/26/the-quest-for-the-perfect-dark-mode-using-vanilla-javascript/
 */
Cookies.set("key", "value");
window.localStorage.setItem('hie', "hi");
const setColorMode = (mode) => {
	// Mode was given
	if (mode) {
		// Update data-* attr on html
		document.documentElement.setAttribute('data-force-color-mode', mode);
		// Persist in local storage
		window.localStorage.setItem('color-mode', mode);
		
		//Cookies.set('color-mode', mode);
		

		// Make sure correct radio button is up-to-date
		document.querySelector('#force-color-mode-to-dark').checked = (mode === 'dark');
		document.querySelector('#force-color-mode-to-light').checked = (mode === 'light');
    
    
    //For toggle
    
    
    // Make sure the checkbox is up-to-date
		document.querySelector('#toggle-darkmode').checked = (mode === 'dark');
    
    
    
	}
	
	// No mode given (e.g. auto)
	else {
		// Remove data-* attr from html
		document.documentElement.removeAttribute('data-force-color-mode');
		// Remove entry from local storage
		window.localStorage.removeItem('color-mode');
		
		
		//Cookies.expire('color-mode');
		
		// Make sure the checkbox is up-to-date, matching the system preferences
		document.querySelector('#auto-color-mode').checked = true;
    
    
    //FOR TOGGLE
    
    // Make sure the checkbox is up-to-date, matching the system preferences
		document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    
    
	}
}


window.onload=function(){

document.querySelector('#force-color-mode-to-light').addEventListener('click', (e) => {
	setColorMode('light');
});

document.querySelector('#force-color-mode-to-dark').addEventListener('click', (e) => {
	setColorMode('dark');
});

document.querySelector('#auto-color-mode').addEventListener('click', (e) => {
	setColorMode(false);
});

}



// FOR TOGGLE


document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
	setColorMode(e.target.checked ? 'dark' : 'light');
});

// Keep an eye out for System Light/Dark Mode Changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addListener(() => {
	// Ignore change if there's an override set
	if (document.documentElement.getAttribute('data-force-color-mode')) {
		return;
	}

	// Make sure the checkbox is up-to-date
 	document.querySelector('#toggle-darkmode').checked = mediaQuery.matches;
});
