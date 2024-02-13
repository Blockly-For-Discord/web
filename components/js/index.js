
document.addEventListener('DOMContentLoaded', function() {
    
    const callback = window.location.search;
    if (callback !== '') {
        var searchParams = new URLSearchParams(callback);
        var ErrorMessage = searchParams.get('error');

        ThrowErrorMessage(ErrorMessage);
    }
})


function ThrowErrorMessage (text) {
    b4d.Toastify({
        text: "An Error occurred while logging you in: " + text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center", 
        stopOnFocus: false,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();
}