
const { mode } = window.__pdm__


// dark-mode media query matched or not
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(matched)
	console.log('Currently in dark mode');
else
	console.log('Currently not in dark mode');





// Get some elements we will use.
const toggleEls = document.querySelectorAll('.pdm-toggle')

// Get some elements we will use.
const labelEls = document.querySelectorAll('.pdm-label')

// Listen to the color mode and update the UI.
mode.subscribe((m) => labelEls.forEach((el) => (el.textContent = m)))

// At this point we can show the elements.
labelEls.forEach((el) => (el.style.visibility = 'unset'))
// These elements will toggle between light and dark modes.
toggleEls.forEach((el) => {
  el.addEventListener('click', (e) =>
    mode.update((v) => (v === 'light' ? 'dark' : 'light')),
  )
})









// Get some elements we will use.
const resetButton = document.getElementById('auto-radio')

// These elements will clear the saved color mode,
// which will cause the color mode to fallback to
// the system color mode.
resetButton.addEventListener('click', () => mode.set(undefined))




//
// Get some elements we will use.
const lightBtn = document.getElementById('light-radio')

// These elements will clear the saved color mode,
// which will cause the color mode to fallback to
// the system color mode.
lightBtn.addEventListener('click', () => mode.set('light'))






//
// Get some elements we will use.
const darkBtn = document.getElementById('dark-radio')

// These elements will clear the saved color mode,
// which will cause the color mode to fallback to
// the system color mode.
darkBtn.addEventListener('click', () => mode.set('dark'))




//
//
$(function() {
	$("input[name=\"options-d-l-mode\"]").click(function(){
		var thisElem = $(this);
		var value = thisElem.val();
		//localStorage:
		localStorage.setItem("option", value);
		//Cookies:
		//document.cookie="option="+value;
    });
	//localStorage:
	var itemValue = localStorage.getItem("option");
	if (itemValue !== null) {
		$("input[value=\""+itemValue+"\"]").click();
	}
  });




// Change when localstorage pdm = dark  local storage set 'option' value to dark-radio 










var repeater;
doWork();
function doWork() {
 repeater = setTimeout(doWork, 0);
 const themeval = localStorage.getItem("pdm");
$("input[name=\"options-d-l-mode\"]").click(function(){
		var thisElem = $(this);
		var value = thisElem.val();
		//localStorage:
		localStorage.setItem("option", value);
		//Cookies:
		//document.cookie="option="+value;
    });

if (themeval === 'light'){
  localStorage.setItem("option", 'light');
  $("#light-radio").prop("checked", true);
} else if (themeval === 'dark'){
  localStorage.setItem("option", 'dark');
  $("#dark-radio").prop("checked", true);
}

}