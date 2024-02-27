

export function Init404 (query) {
    console.log("Should log on /");
    const container = document.getElementById("content");
    container.innerHTML = "404 Site should load here";
}

export function Switch404 () {


    const response = `{"response":"success"}`;
    return response;
}