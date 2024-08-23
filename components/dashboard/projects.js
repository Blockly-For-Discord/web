

export function ProjectsInit () {

    console.log("hello world, from projects.");
}

export async function ProjectsSwitch () {

    console.log("bye from projects")
    document.getElementById('test').outerHTML = '';
    const response = `{"response":"success"}`;
    return response;
}