

export function HomeInit () {

    console.log("hello world, from home.")
}



export async function HomeSwitch () {

    console.log("bye from home")
    const response = `{"response":"success"}`;
    return response;
    
}
