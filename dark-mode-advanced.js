 // Check if there's any override. If so, let the markup know by setting an attribute on the <html> element
 const colorModeOverride = window.localStorage.getItem('color-mode');
 const hasColorModeOverride = typeof colorModeOverride === 'string';
 if (hasColorModeOverride) {
   document.documentElement.setAttribute('data-color-mode', colorModeOverride);
 }






// Check the dark-mode checkbox if
      // - The override is set to dark
      // - No override is set but the system prefers dark mode
      if ((colorModeOverride == 'dark') || (!hasColorModeOverride && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('#toggle-darkmode').checked = true;
      }
    
    
    
    // Make sure correct checkbox is checked on load
    if (hasColorModeOverride) {
      if (colorModeOverride == 'dark') {
        document.querySelector('#force-color-mode-to-dark').checked = true;
      } else {
        document.querySelector('#force-color-mode-to-light').checked = true;
      }
    }





/*
 * Adjusted version of https://codepen.io/bramus/pen/jObmydd
 * Demo for https://www.bram.us/2020/04/26/the-quest-for-the-perfect-dark-mode-using-vanilla-javascript/
 */


const setColorMode = (mode) => {
	// Mode was given
	if (mode) {
		// Update data-* attr on html
		document.documentElement.setAttribute('data-color-mode', mode);
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
		document.documentElement.removeAttribute('data-color-mode');
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




document.querySelector('#force-color-mode-to-light').addEventListener('click', (e) => {
	setColorMode('light');
});

document.querySelector('#force-color-mode-to-dark').addEventListener('click', (e) => {
	setColorMode('dark');
});

document.querySelector('#auto-color-mode').addEventListener('click', (e) => {
	setColorMode(false);
});





// FOR TOGGLE


document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
	setColorMode(e.target.checked ? 'dark' : 'light');
});

// Keep an eye out for System Light/Dark Mode Changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addListener(() => {
	// Ignore change if there's an override set
	if (document.documentElement.getAttribute('data-color-mode')) {
		return;
	}

	// Make sure the checkbox is up-to-date
 	document.querySelector('#toggle-darkmode').checked = mediaQuery.matches;
});


