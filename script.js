document.querySelectorAll("button[data-file]").forEach(function(button) {
    button.addEventListener("click", function() {
        alert(button.dataset.file);
    });
});
