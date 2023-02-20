import jQuery, { param } from "jquery";


jQuery.ajax({
    url: "localhost:8888/users",
    context: "Ola Mundo",
    
}).done(function(params) {
    console.log(params)
})