document.addEventListener("DOMContentLoaded", function () {

    /* FILTER */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            document.querySelector(".filter-btn.active")?.classList.remove("active");
            button.classList.add("active");

            const filter = button.dataset.filter;

            projects.forEach(project => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    /* MODAL */
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGithub = document.getElementById("modal-github");
    const closeModal = document.getElementById("close-modal");

    projects.forEach(card => {
        card.addEventListener("click", function () {

            modalTitle.innerText = card.dataset.title;
            modalDescription.innerText = card.dataset.description;
            modalGithub.href = card.dataset.github;

            modal.classList.add("active");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

});
