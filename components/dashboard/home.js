

export function HomeInit () {

}



export async function HomeSwitch () {

    console.log("bye from home")
    document.getElementById('test').outerHTML = '';
    const response = `{"response":"success"}`;
    
    return response;
    
}
