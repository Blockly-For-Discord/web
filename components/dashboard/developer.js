export function DeveloperInit () {
    console.log("hello from Developer.")
}

export async function DeveloperSwitch () {
    console.log("bye from Developer")
    const response = `{"response":"success"}`;
    return response;
}