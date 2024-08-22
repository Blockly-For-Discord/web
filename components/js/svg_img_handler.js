
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

"use strict";



document.addEventListener('DOMContentLoaded', () => {
    img_svg_handler();

    const observer = new MutationObserver(handleAddedImages);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    function handleAddedImages(mutationsList) {
        // Check for added img elements
        for(let mutation of mutationsList) {
            if(mutation.addedNodes.length) {
                for(let node of mutation.addedNodes) {
                    if(node.nodeName === 'IMG') {
                        img_svg_handler();
                        break;
                    }
                }
            }
        }
      
    }
});


function img_svg_handler () {
    
    let parser = new DOMParser();

    const elements = document.getElementsByTagName('img');

    for (const element of elements) {

         
       
        if (element.src.endsWith('.svg')) {

            fetch(element.src).then(response => response.text()).then(svgContent => {
                /*const newSvgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                newSvgElement.innerHTML = svgContent; */
                let svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
                let svgElement = svgDoc.documentElement;

                for (let i = 0; i < element.attributes.length; i++) {
                    let attr = element.attributes[i];
                    
                    // Skip the 'src' attribute cuz we dont wanna copy the image source
                    if (attr.name === 'src') continue;
                    
                    // Set the attribute on the new svg element (svgElement)
                    svgElement.setAttribute(attr.name, attr.value);
                }
                element.parentNode.replaceChild(svgElement, element);
            })

        }
    }
}