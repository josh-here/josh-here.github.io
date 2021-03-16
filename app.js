$(document).ready(function(){

    // ==============
    // theme switcher


    // Original : http://jamesmathias.com/blog/article/switching-styles-silently-in-six-steps
    // ==============
    
        // listen for clicks on the a links within .themes
        $('.accent-radios input').on('click',function(){
            // change the href of link.theme to match the rel of this
            $('.theme').attr('href',$(this).attr('rel'));
            // set a cookie to remember
           // $.cookie('theme-cookie',$(this).attr('rel'), {expires: 999999});
            Cookies.set('theme-cookie',$(this).attr('rel'), {expires: Infinity});
            // prevent this from reloading the browser
            return true;
        });
    
    });


    $(function() {

        $("input[name=\"color\"]").click(function(){
            var thisElem = $(this);
            var value = thisElem.val();

            //localStorage:
            //localStorage.setItem("option", value);
            //Cookies:
            Cookies.set('option',value, {expires: Infinity});
            //document.cookie="option="+value;
        });
        /**
        //localStorage:
        var itemValue = localStorage.getItem("option");
        if (itemValue !== null) {
            $("input[value=\""+itemValue+"\"]").click();
        }
        */
         /**
        //Cookies:
        var n = document.cookie;

        if (n.indexOf("option=") !== -1) {
            var cookieValue = n.substring(n.indexOf("option=")+7, n.indexOf(";"))
            $("input[value=\""+cookieValue+"\"]").click();
        }
        **/

        const cookiename = Cookies.get('option'); // "value"
        if(cookiename === 'color-1'){
            $("#color-1").prop("checked", true);
        } else if(cookiename === 'color-2'){
            $("#color-2").prop("checked", true);
        } else if(cookiename === 'color-3'){
            $("#color-3").prop("checked", true);
        }
        
    });



