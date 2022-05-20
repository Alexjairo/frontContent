$(function() {
    var url = window.location.pathname;
    $("a").each(function() {
        console.log(this.pathname);

        if (url == (this.pathname)) {
            console.log(url);
            $(this).closest(".menu-item-group").addClass("item_active");
            $(this).closest(".menu-item-label-content-element").addClass("item_active_element");
            $(this).closest(".general-icon").addClass("item_icon");

        }
    });
});

function AgregarClase() {
    $("active").click(function() {
        $("estado-i").addClass("view");
    });
}
// var el = document.getElementById("content-section");
// console.log(el);
// var asientos = [];
// for (i = 0; i < el.length; i++) {
//     console.log(el[i]);
// }




var data = $('.nav-item').data('value');
console.log(data);
