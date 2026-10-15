
document.querySelectorAll("button[data-file]").forEach(function(button) {
    button.addEventListener("click", function() {
        fetch(button.dataset.file)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    });
});


