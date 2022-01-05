// State variables
let activeToolState = 'first-tool';
let activeToolSelectorState = document.getElementById(activeToolState);


// Selectors
const articles = document.querySelectorAll('article');
const main = document.querySelector('main');

// App start default settings
activeToolSelectorState.style.width = '100%';
main.innerHTML = tools.CREDIT_CARD_CHECKER;


articles.forEach(article => {
    article.addEventListener('click', e => {
        // Toolbar changes
        activeToolSelectorState.style.width = '80%'; // Reset

        // Switch to the clicked tool
        activeToolSelectorState = document.getElementById(e.target.id);
        activeToolSelectorState.style.width = '100%';
        activeToolState = e.target.id;


        // Main changes
        main.innerHTML = activeToolState === 'first-tool' ? tools.CREDIT_CARD_CHECKER 
        : activeToolState === 'second-tool' ? tools.SIMPLE_API_GET
        : null;
    });
});