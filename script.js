const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruitKeyWords = [
    'Apple', 
    'Apricot',
    'Avocado 🥑', 
    'Banana', 
    'Bilberry', 
    'Blackberry', 
    'Blackcurrant', 
    'Blueberry', 
    'Boysenberry', 
    'Currant', 
    'Cherry', 
    'Coconut', 
    'Cranberry', 
    'Cucumber', 
    'Custard apple', 
    'Damson', 
    'Date', 
    'Dragonfruit', 
    'Durian', 
    'Elderberry', 
    'Feijoa', 
    'Fig', 
    'Gooseberry', 
    'Grape', 
    'Raisin', 
    'Grapefruit', 
    'Guava', 
    'Honeyberry', 
    'Huckleberry', 
    'Jabuticaba', 
    'Jackfruit', 
    'Jambul', 
    'Juniper berry', 
    'Kiwifruit', 
    'Kumquat', 
    'Lemon', 
    'Lime', 
    'Loquat', 
    'Longan', 
    'Lychee', 
    'Mango', 
    'Mangosteen', 
    'Marionberry', 
    'Melon', 
    'Cantaloupe', 
    'Honeydew', 
    'Watermelon', 
    'Miracle fruit', 
    'Mulberry', 
    'Nectarine', 
    'Nance', 
    'Olive', 
    'Orange', 
    'Clementine', 
    'Mandarine', 
    'Tangerine', 
    'Papaya', 
    'Passionfruit', 
    'Peach', 
    'Pear', 
    'Persimmon', 
    'Plantain', 
    'Plum', 
    'Pineapple', 
    'Pomegranate', 
    'Pomelo', 
    'Quince', 
    'Raspberry', 
    'Salmonberry', 
    'Rambutan', 
    'Redcurrant', 
    'Salak', 
    'Satsuma', 
    'Soursop', 
    'Star fruit', 
    'Strawberry', 
    'Tamarillo', 
    'Tamarind', 
    'Yuzu'
];

let search = input.onkeyup = () => {
    let results = [];
    let inputResult = input.value;
    if (inputResult.length) {
        results = fruitKeyWords.filter(keyword => 
            keyword.toLowerCase().includes(inputResult.toLowerCase())
        );
        // console.log(results)
    }
    showSuggestions(results);
};


function searchHandler(e) {
	// TODO
}

function showSuggestions(results, inputVal) {
	const content = results.map((list)=>{
        return `<li onclick="useSuggestion(event)">${list}</li>`;
    });
	suggestions.innerHTML = "<ul>"+ content.join("") +"</ul>"
}

function useSuggestion(e) {
    const clickedElement = e.target;
    input.value = clickedElement.textContent || clickedElement.innerText;
	suggestions.innerHTML = ``;
}

document.addEventListener('click', function(event) {
    if (!input.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.innerHTML = ''; 
    }
});

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);