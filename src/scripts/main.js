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
        switch(activeToolState) {
            case 'first-tool':
                main.innerHTML = tools.CREDIT_CARD_CHECKER;
                break;
            case 'second-tool':
                main.innerHTML = tools.SIMPLE_API_GET;
                break;
            case 'third-tool':
                main.innerHTML = tools.WEB_SCRAPER.WEB_SCRAPER_HTML;
                tools.WEB_SCRAPER.WEB_SCRAPER_LOGIC();
                break;
        }
    });
});