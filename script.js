const projects = [

    {
        title: "Carzanart",

        subject: "Geography",

        year: "2026",

        description:
            "A futuristic city design based in Northern Austria, including transportation, water, energy, farming, and urban planning.",

        image:
            "images/carzanart.jpg",

        page:
            "projects/carzanart.html"
    },




    {
        title: "DNA & Genetics",

        subject: "Science",

        year: "2026",

        description:
            "An exploration of DNA, genetics, bases, and Punnett squares.",

        image:
            "images/dna.jpg",

        page:
            "projects/dna.html"
    }

];


function setupFilters() {

    const years =
        [...new Set(projects.map(p => p.year))];

    const subjects =
        [...new Set(projects.map(p => p.subject))];


    years.forEach(year => {

        const option =
            document.createElement("option");

        option.value = year;
        option.textContent = year;

        yearFilter.appendChild(option);

    });


    subjects.forEach(subject => {

        const option =
            document.createElement("option");

        option.value = subject;
        option.textContent = subject;

        subjectFilter.appendChild(option);

    });

}


function renderProjects() {

    const grid =
        document.getElementById("projectGrid");


    const search =
        document.getElementById("search")
        .value
        .toLowerCase();


    const year =
        document.getElementById("yearFilter")
        .value;


    const subject =
        document.getElementById("subjectFilter")
        .value;


    const filtered =
        projects.filter(project => {

            const text =
                (
                    project.title +
                    project.subject +
                    project.description
                ).toLowerCase();


            return (
                text.includes(search) &&
                (year === "all" || project.year === year) &&
                (subject === "all" || project.subject === subject)
            );

        });


    grid.innerHTML = "";


    filtered.forEach(project => {

        grid.innerHTML += `

            <article class="card">

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>


                <div class="card-content">

                    <div class="tags">

                        <span class="tag">
                            ${project.subject}
                        </span>

                        <span class="tag">
                            ${project.year}
                        </span>

                    </div>


                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    <div class="card-footer">

                        <span>
                            ${project.year}
                        </span>

                        <a
                            class="view"
                            href="${project.page}">

                            View project →

                        </a>

                    </div>

                </div>

            </article>

        `;

    });


    document.getElementById("count")
        .textContent =
        `${filtered.length} projects`;

}


function updateStats() {

    document.getElementById("projectNumber")
        .textContent = projects.length;


    document.getElementById("yearNumber")
        .textContent =
        new Set(projects.map(p => p.year)).size;


    document.getElementById("subjectNumber")
        .textContent =
        new Set(projects.map(p => p.subject)).size;

}


setupFilters();
updateStats();
renderProjects();

