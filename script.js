
document.querySelectorAll("button[data-file]").forEach(function(button) {
    button.addEventListener("click", function() {
        fetch(button.dataset.file)
            .then(response => response.json())
            .then(data => {
                const results = document.getElementById("craft-results");
                results.innerHTML = "";

                data.craft_items[0].crafts.forEach(function(craft) {
                    const craftCard = document.createElement("div");

                    craftCard.innerHTML = `
                        <h2>${craft.name}</h2>
                        <p>Difficulty: ${craft.difficulty}</p>
                        <p>Time: ${craft.time_minutes} minutes</p>
                    `;

                    results.appendChild(craftCard);
                });
            });
    });
});



