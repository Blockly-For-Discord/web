export function UpdatesInit () {
    console.log("hello from Updates.")
}

export async function UpdatesSwitch () {
    console.log("bye from Updates")
    const response = `{"response":"success"}`;
    return response;
}