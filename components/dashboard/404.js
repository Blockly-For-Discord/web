

export function Init404 (query) {
    console.log("404 Page Loaded");
    const container = document.getElementById("content");
    container.innerHTML = "404 Site should load here";
}

export function Switch404 () {

    console.log("404 Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}