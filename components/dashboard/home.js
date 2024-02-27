

export function HomeInit (query) {
    console.log("Should log on / aka Home");
    const container = document.getElementById("content");
    container.innerHTML = "This should appear when loading home :D";
}

export function HomeSwitch () {


    const response = `{"response":"success"}`;
    return response;
}