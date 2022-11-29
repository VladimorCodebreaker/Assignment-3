(() => {
    const theme = document.querySelectorAll(".theme");
    const playerNum = document.querySelectorAll(".players");
    const grid = document.querySelectorAll(".field");

    localStorage.setItem("theme", "icons-animals");
    localStorage.setItem("players", "1");
    localStorage.setItem("grid", "3x4");

    Array.from(theme).forEach(el => {
        el.addEventListener("click", (e) => {
            const selected = document.getElementsByClassName("theme-active");
            selected[0].className = selected[0].className.replace(" theme-active", "");
            el.className += " theme-active";

            if (e.target.value === "icons-transport") {
                localStorage.setItem("theme", "icons-transport");
            } else if (e.target.value === "icons-food") {
                localStorage.setItem("theme", "icons-food");
            } else {
                localStorage.setItem("theme", "icons-animals");
            }
        })
    });

    Array.from(playerNum).forEach(el => {
        el.addEventListener("click", (e) => {
            const selected = document.getElementsByClassName("players-active");
            selected[0].className = selected[0].className.replace(" players-active", "");
            el.className += " players-active";

            switch (e.target.value) {
                case "1":
                    localStorage.setItem("players", "1");
                    break;
                case "2":
                    localStorage.setItem("players", "2");
                    break;
                case "3":
                    localStorage.setItem("players", "3");
                    break;
                case "4":
                    localStorage.setItem("players", "4");
                    break;
            }
        })
    });

    Array.from(grid).forEach(el => {
        el.addEventListener("click", (e) => {
            const selected = document.getElementsByClassName("field-active");
            selected[0].className = selected[0].className.replace(" field-active", "");
            el.className += " field-active";

            if (e.target.value === "5x4") {
                localStorage.setItem("grid", "5x4");
            } else if (e.target.value === "4x4") {
                localStorage.setItem("grid", "4x4");
            } else {
                localStorage.setItem("grid", "3x4");
            }
        })
    });
})()