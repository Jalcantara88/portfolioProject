$(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $("#contactButton").click(function() {
        $("#contactModal").modal("show");
    });

    $("#closeModal").click(function() {
        $("#imgModal").modal("close");
    });
});