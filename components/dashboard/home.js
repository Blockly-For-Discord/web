

export function HomeInit (query) {

    console.log("Should log on / aka Home");
    const container = document.getElementById("content");

    // when home loads update title and push state
    history.pushState({}, "", "/dashboard");
    document.title = "B4D - Home";
    const box = document.createElement("div");
    box.id = "box-container";
    box.classList.add("box-container");
    container.appendChild(box);
    box.innerHTML = "<button class=\"home-button\">Start New Project</button>";
}

export async function HomeSwitch () {


    SaveProject();

    const response = `{"response":"success"}`;
    return response;
}


function SaveProject() {
    // save stuff. Preferrebly this shouldnt take too long, cause it can make the user wait. If you know that this wont break other pages, you can remove 'async'
}