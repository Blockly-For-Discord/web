

export function Init404 (query) {

    window.showLoading(new Promise(r => setTimeout(r, 1000)));
    console.log("404 Page Loaded");
    const container = document.getElementById("content");
    container.innerHTML = "404 Site should load here";

    document.title = "B4D - 404";
}

export async function Switch404 () {

    console.log("404 Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}