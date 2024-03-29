

export function Init404 (query) {

    document.title = "B4D - 404";
    
}

export async function Switch404 () {

    console.log("404 Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}