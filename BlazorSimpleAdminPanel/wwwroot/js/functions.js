window.log = (value) => {
    console.log(value)
}

window.callDotNetFunction = (value) => normalMethod(value)

function normalMethod(value) {
    DotNet.invokeMethodAsync("BlazorSimpleAdminPanel", "MethodCallFromJs", value).then((response) => {
        console.log(response);
    })
}

