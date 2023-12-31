// loadComponents.js
const loadComponents = (components) => {
    components.forEach(component => {
        fetch(`components/${component}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(component);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.warn(`No element with ID '${component}' found.`);
                }
            })
            .catch(error => {
                console.error(`Failed to load component ${component}: ${error}`);
            });
    });
};
