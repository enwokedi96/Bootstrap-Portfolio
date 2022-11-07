//adapted from https://bootsnipp.com/snippets/lGW9j 
function myFunction() {    
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')
        })
    })
}