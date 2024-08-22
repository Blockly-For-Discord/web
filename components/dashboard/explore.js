export function ExploreInit () {
    console.log("hello from Explore.")
}

export async function ExploreSwitch () {
    console.log("bye from Explore")
    const response = `{"response":"success"}`;
    return response;
}