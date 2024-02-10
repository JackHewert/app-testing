function createAndAppendElement(tagName, parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) {
        console.error(`Parent element '${parentSelector}' not found.`);
        return;
    }

    const newElement = document.createElement(tagName);
    parentElement.appendChild(newElement);
}

// Example usage of the function
createAndAppendElement('div', 'body');