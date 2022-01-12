const CREDIT_CARD_CHECKER = `
    <div class="animate__animated animate__backInDown">
        <h1>Credit card checker</h1>
        <input type="number" placeholder="Put the credit card">
    </div>
`;

const SIMPLE_API_GET = `
    <div class="animate__animated animate__backInDown">
        <h2>Simple API GET method</h2>
        <input type="text" placeholder="Put the API">
        <textarea readonly>The output will appear here...</textarea>
    </div>
`;


// Web Scraper third tool
const WEB_SCRAPER_HTML = `
    <div class="animate__animated animate__backInDown">
        <h2>Web Scraper</h2>

        <form>
            <input type="text" placeholder="Put the target web url">
            <button type="submit">Scrape</button>
        </form>

        <textarea readonly>The output will appear here...</textarea>

        <section id="preference">
            <button>Minified</button>
            <button>Formatted</button>
            <button>Copy to clipboard</button>
        </section>
    </div>
`;

const WEB_SCRAPER_LOGIC = () => {
    const form = document.querySelector('form');
    const textarea = document.querySelector('textarea');
    const input = document.querySelector('input');
    
    const preferenceSelector = document.getElementById('preference').children;
    const preferences = {
        minified: preferenceSelector[0],
        formatted: preferenceSelector[1],
        copy: preferenceSelector[2]
    }

    for (let preference in preferences) {
        preference = preferences[preference];
        preference.disabled = true;
    }
    
    form.addEventListener('submit', async e => {
        e.preventDefault();
        
        const inputValue = e.target[0].value;
        if (!inputValue) return;

        const response = await fetch(`https://web-scraper-api-node.herokuapp.com/api/html?link=${inputValue}`);
        const json = await response.json();
        // const formatted = JSON.parse(json);

        if (response.status === 200) {
            input.style.borderColor = 'lightblue';
            input.value = '';
            textarea.value = json;
            textarea.style.animation = 'flash 1s';

            for (let preference in preferences) {
                preference = preferences[preference];
                preference.disabled = false;
            }

            
        } else {
            input.style.borderColor = 'red';
            textarea.value = 'Oops! I can\'t scrape that website, try with another link';
            textarea.style.animation = 'flash 1s';

            for (let preference in preferences) {
                preference = preferences[preference];
                preference.disabled = true;
            }
        }

        setTimeout(() => textarea.style.animation = 'none', 1000);
    });
}
;

const WEB_SCRAPER = {
    WEB_SCRAPER_HTML,
    WEB_SCRAPER_LOGIC
}
//

// Join of all tools for use
const tools = {
    CREDIT_CARD_CHECKER,
    SIMPLE_API_GET,
    WEB_SCRAPER
}