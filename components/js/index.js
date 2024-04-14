
document.addEventListener('DOMContentLoaded', function() {
    const navbar = ` <div class="nav-logo">
    <svg class="logo" width="944" height="804" viewBox="0 0 944 804" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M561.878 89.3585C493.097 -29.7862 321.138 -29.7862 252.356 89.3585L24.398 484.226C-44.3843 603.373 41.5938 752.302 179.159 752.302H407.011C357.571 697.914 342.251 614.313 384.29 541.855L496.453 348.529C532.648 286.142 597.169 256.545 660.236 259.737L561.878 89.3585Z" fill="#308FE7"/>
        <path d="M535.111 406.33C603.984 287.672 775.335 287.672 844.208 406.33L918.65 534.576C987.807 653.723 901.856 803.019 764.101 803.019H615.218C477.464 803.019 391.51 653.723 460.668 534.576L535.111 406.33Z" fill="#D9D9D9"/>
        </svg>
    <span class="logo-text">B4D</span>
</div>
<div class="nav-items">
</div>`;
    SetNavbar(navbar);

    const callback = window.location.search;
    if (callback !== '') {
        var searchParams = new URLSearchParams(callback);
        var ErrorMessage = searchParams.get('error');

        ThrowErrorMessage(ErrorMessage);
    }
})


function ThrowErrorMessage (text) {
    b4d.Toastify({
        text: "An Error occurred: " + text,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center", 
        stopOnFocus: false,
        style: {
          background: "#cf3429"
        },
        onClick: function(){}
      }).showToast();
}