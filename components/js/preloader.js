
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/


const setProgress = function (e) {
    
    var percent = e;
    if (percent > 1) {
        percent = 1;
    }
    const bar = document.getElementById('preloader-progress');
    const container = document.getElementById('preloader-bar');

    // for some reason you need "getComputedStyle" if your width is contained within a class. style.width only works for inline styles
    var computedStyle = window.getComputedStyle(container);

    bar.style.width = parseFloat(computedStyle.width) * percent + "px";

}



document.addEventListener('DOMContentLoaded', function () {

    const bar = document.getElementById('preloader-progress');
    const percentage = document.getElementById('preloader-percentage');
    const container = document.getElementById('preloader-bar');

    var resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            
            // it takes the observed width of the inner bar and divides it by the container size then multiplies that by 100. This is to calculate a percentage. then its truncated to no longer be float
            percentage.innerHTML = Math.trunc(entry.contentRect.width / parseFloat(window.getComputedStyle(container).width) * 100) + "%";
            
        }
    });
    
    // Start observing the bar to get its width live feeded
    resizeObserver.observe(bar);

});