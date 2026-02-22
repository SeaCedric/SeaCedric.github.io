document.addEventListener("DOMContentLoaded", function () {
    
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projects.forEach(project => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.style.display = "";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

});