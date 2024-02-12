document.addEventListener('DOMContentLoaded', function() {
    
    const callback = window.location.search;
    if (callback !== '') {
        var searchParams = new URLSearchParams(callback);
        var codeValue = searchParams.get('error');

        ThrowErrorMessage(codeValue);
    }
})