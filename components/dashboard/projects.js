

export function ProjectsInit () {

    const testElement = document.createElement('sample');
    testElement.setAttribute('name', 'projects_select-area');
    document.getElementById('select-area').appendChild(testElement);
}

export async function ProjectsSwitch () {

    console.log("bye from projects")
    const response = `{"response":"success"}`;
    return response;
}