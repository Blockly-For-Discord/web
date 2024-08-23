

export function HomeInit () {

    console.log("hello world, from home.")
    const testElement = document.createElement('sample');
    testElement.setAttribute('name', 'projects_HelloWorld');
    document.getElementById('main-area').appendChild(testElement);
}



export async function HomeSwitch () {

    console.log("bye from home")
    const response = `{"response":"success"}`;
    
    return response;
    
}
