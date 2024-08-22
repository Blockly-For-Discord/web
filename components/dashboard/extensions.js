export function ExtensionsInit () {
    console.log("hello from Extensions.")
}

export async function ExtensionsSwitch () {
    console.log("bye from Extensions")
    const response = `{"response":"success"}`;
    return response;
}