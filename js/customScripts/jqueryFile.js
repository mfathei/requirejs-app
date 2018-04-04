define(['jquery', 'methods'], function ($, methods) {
    $("#clickMe").on("click", function () {
        methods.showAlert("Welcome To Asynchronous Module Definition!");
    });
});