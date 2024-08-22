export function UsersInit () {
    console.log("hello from Users.")
}

export async function UsersSwitch () {
    console.log("bye from Users")
    const response = `{"response":"success"}`;
    return response;
}