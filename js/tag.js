// tag.js

// Function to create a new HTML tag element
function createTag(tagName, text) {
    const tag = document.createElement(tagName);
    tag.textContent = text;
    return tag;
}

// Export the createTag function to make it available for importing
export { createTag };
