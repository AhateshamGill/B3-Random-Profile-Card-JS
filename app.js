    const data = [
        {
            id: 1,
            image:"https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.505555653.1683209373&semt=ais",
            name: "Ehatesham_gill",
            designation: "Full_Stack_Web_Developer",
            info:"Full stack developers are computer programmers who are proficient in both front and back end coding. Their primary responsibilities include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms. Completely free trial, no card required."
        },
        {
            id: 2,
            image:"https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.505555653.1683209373&semt=ais",
            name: "Joan_dou",
            designation: "UI_UX_Web_Designer",
            info:"UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps."
        },
        {
            id: 3,
            image:"https://img.freepik.com/free-vector/content-structure-concept-illustration_114360-5252.jpg?size=626&ext=jpg&ga=GA1.2.505555653.1683209373&semt=ais",
            name: "Genisha_Gray",
            designation: "Front_End_Developer",
            info:"Front-end developers use HTML, CSS, and JavaScript to build the client side of a website. They are responsible for building the visual elements on a page, such as the layout, buttons, menus, forms, and other features that users will see and interact with when they visit a webpage."
        },
        {
            id: 4,
            image:"https://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?size=626&ext=jpg&ga=GA1.1.505555653.1683209373&semt=ais",
            name: "Eslayr Dooms",
            designation: "Back_End_Developer",
            info:"Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes."
        },
    ];

    let image = document.querySelector('.img');
    let isam = document.querySelector('.name');
    let designation = document.querySelector('.designation');
    let info = document.querySelector('.info');
    let backward = document.querySelector('.backward');
    let forward = document.querySelector('.forward');
    let count = 0;
    image.src = data[count].image;
    isam.innerText = data[count].name;
    designation.innerText = data[count].designation;
    info.innerText = data[count].info ;

    forward.addEventListener("click", () => {
        if (count > 3) {
            count = 0
        }
        image.src = data[count].image;
        isam.innerText = data[count].name;
        designation.innerText = data[count].designation;
        info.innerText = data[count].info;
        count++;
    });
    backward.addEventListener('click', () => {
        if(count < 0) {
            count = 3
        }
        image.src = data[count].image;
        isam.innerText = data[count].name;
        designation.innerText = data[count].designation;
        info.innerText = data[count].info;
        count--;
    });