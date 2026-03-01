const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,
    image: "snortleblat.webp",

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;

            if (this.health <= 0) {
                this.health = 0;
                alert(this.name + " died");
            }

            updateCard();
        }
    },

    levelUp: function() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
}

updateCard();