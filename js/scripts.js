$(function() {
    $(".imgThumb").click(function() {
        $("#imgModal").modal("show");
    });

    $("#contactButton").click(function() {
        $("#contactModal").modal("show");
    });

    $("#closeModal").click(function() {
        $("#imgModal").modal("close");
    });
});