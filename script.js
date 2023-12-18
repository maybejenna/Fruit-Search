const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruitKeyWords = [
    'Apple', 
    'Apricot',
    'Avocado', 
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
        showSuggestions(results);

        // Check if the input text exactly matches any fruit name
        const exactMatch = fruitKeyWords.some(keyword => 
            keyword.toLowerCase() === inputResult.toLowerCase()
        );

        if (!exactMatch) {
            // If no exact match, clear the image
            document.getElementById('fruitImage').style.display = 'none';
        }
    } else {
        // Clear the suggestions and the image if the input is empty
        suggestions.innerHTML = '';
        document.getElementById('fruitImage').style.display = 'none';
    }
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
	suggestions.innerHTML = '';
  
	const selectedFruit = input.value.toLowerCase().trim();
	const imageUrl = fruitImages[selectedFruit];
  
	if (imageUrl) {
	  document.getElementById('fruitImage').src = imageUrl;
	  document.getElementById('fruitImage').alt = selectedFruit;
	  document.getElementById('fruitImage').style.display = 'block';
	} else {
	  document.getElementById('fruitImage').style.display = 'none';
	}
  }

document.addEventListener('click', function(event) {
    if (!input.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.innerHTML = ''; 
    }
});

const fruitImages = {
	apple: 'images/photo-1570913149827-d2ac84ab3f9a.jpeg', 
    apricot: 'images/photo-1627931754115-478ed65b4fef.webp', 
    avocado: 'images/photo-1522687297221-2d71f8c50fd5.webp', 
    banana: 'images/photo-1571771894821-ce9b6c11b08e.webp', 
    bilberry: 'images/photo-1597389030828-c5218bdf7fa4.webp', 
    blackberry: 'images/photo-1567870335471-1129836babcf.webp', 
   	blackcurrant: 'images/4816.jpg.webp', 
    blueberry: 'images/photo-1597474561103-0773c378a1fb.webp',  
    boysenberry: 'images/istockphoto-635940996-612x612.jpg', 
    currant: 'images/images.jpeg', 
    cherry: 'images/2048x1365-SEO-Morello-cherry-GettyImages-1330319873-e389763.jpg', 
    coconut: 'images/JkdnyBhzENq3qcigZwxQBZ.jpg', 
    cranberry: 'images/Cranberries-in-a-wooden-bowl-16db0f1.jpg', 
    cucumber: 'images/photo-1568584711271-6c929fb49b60.webp', 
    "custard apple": 'images/cherimoya-732x549-thumbnail-732x549.jpg.avif', 
    damson: 'images/Blue-Damson-plum.png', 
    date: 'images/dates-fb2647e.jpg', 
    dragonfruit: 'images/DrAxeDragonFruitThumbnail.jpg', 
    durian: 'images/Unknown.jpeg', 
    elderberry: 'images/black_elderberry__30908.jpg', 
    feijoa: 'images/NZ-researchers-undertake-Feijoa-study-exploring-health-benefits-in-reducing-diabetes-risk.jpg', 
    fig: 'images/what-are-figs-64790d2213b14.jpg', 
    gooseberry: 'images/13163A.jpg', 
    grape: 'images/grapes_0.jpg', 
    raisin: 'images/GettyImages_470699890.0.jpg', 
    grapefruit: 'images/grapefruit-1.png', 
    guava: 'images/29509.jpg.webp', 
	honeyberry: 'images/77288A.jpg', 
    huckleberry: 'images/Garden-Huckleberry__42904.jpg', 
    jabuticaba: 'images/shutterstock_731113408_667x667.jpg.webp', 
    jackfruit: 'images/papi-jackfruit-tree-scaled.jpg.webp', 
    jambul: 'images/IMG_4539.heic.webp', 
    "juniper berry": 'images/JuniperBerryBos__91139.webp', 
    kiwifruit: 'images/kiwi.jpeg', 
    kumquat: 'images/Kumquat_THUMBNAIL.jpg', 
    lemon:"images/lemons-tree.jpg.webp", 
    lime:'images/DrAxeLimesFB.jpg', 
    loquat:"images/shutterstock_1051863656-1024x665.jpg", 
    longan:"images/longan_thumb.jpg", 
    lychee:"images/lychee-on-table-sliced-open-736aa3fbe6c34d54ac20a0c833c29b3f.jpg", 
    mango: "images/clean_juice_mango_benefits_hero-3-scaled.jpeg", 
    mangosteen:"images/71hizzz1ZxL._AC_UF1000,1000_QL80_.jpg", 
    marionberry:"images/gettyimages-518990304-70-498b0d4ff21b99d91a5c79457b2488b5be3ca46a.jpg", 
    melon:"images/intro-1688477999.jpg", 
    cantaloupe:"images/a-close-up-of-a-sliced-cantaloupe-on-a-blue-table.jpg", 
    honeydew:"images/intro-1657206649.jpg", 
    watermelon:"images/watermelon.jpg", 
    "miracle fruit": "images/How-to-Grow-Miracle-Fruit-Feature.jpg", 
    mulberry:"images/mullberry.jpeg", 
    nectarine: "images/Unknown-1.jpeg", 
    nance:"images/yellow-ripe-nance-fruit-guatemala-260nw-1814896454.jpg.webp", 
    olive:"images/iStock-177231167-scaled.jpg", 
    orange:"images/Ambersweet_oranges.jpg", 
    clementine:"images/Clementine-Syrup-mediumThreeByTwo440.jpg", 
    mandarine:"images/mandarine_1500x.webp.jpeg", 
    tangerine:"images/Tangerines.jpg", 
    papaya:"images/papya.jpeg", 
    passionfruit:"images/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__09__passion_fruit-49bc07d878324c61bc5bc7dc0ca86281.jpg", 
    peach:"images/DrAxePeachFB.jpg", 
    pear:"images/how-to-store-pears-4x3-02b1e602421e4cec971af8f460a78ac6.jpg", 
    persimmon:"images/GettyImages-476831649-2000-da38039079824090b4a4f801f1743e21.jpg", 
    plantain:"images/Plantains.jpg", 
    plum:"images/Plums-scaled-1.jpg", 
    pineapple:"images/1__60852.webp", 
    pomegranate:"images/pomogrant.jpeg", 
    pomelo:"images/pomelo-1.jpeg", 
	quince: "images/what-is-quince-fruit-6.jpg", 
    raspberry: "images/Unknown-2.jpeg", 
    salmonberry: "images/Unknown-3.jpeg", 
    rambutan:"images/Rambutan.jpg", 
    redcurrant:"images/Unknown-4.jpeg", 
    salak:"images/salak+permaculture+central+america.jpeg", 
    satsuma:"images/Citrus_unshiu_20101127_c.jpg", 
    soursop:"images/Soursop-Photo_900x.jpg.webp", 
    "star fruit": "images/Benefits-of-Star-Fruits.jpg", 
    strawberry: "images/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg",
    tamarillo:"images/maxresdefault.jpg", 
    tamarind:"images/tamarind.jpeg", 
    yuzu:"images/yuzu-japanese-citrus-732x549-thumbnail.jpg.avif",
  };

  input.addEventListener('keyup', function() {
	const selectedFruit = input.value.toLowerCase().trim();
	const imageUrl = fruitImages[selectedFruit];
  
	if (imageUrl) {
	  document.getElementById('fruitImage').src = imageUrl;
	  document.getElementById('fruitImage').alt = selectedFruit;
	  document.getElementById('fruitImage').style.display = 'block';
	} else {
	  document.getElementById('fruitImage').style.display = 'none';
	}
  });

  input.addEventListener('keyup', function(event) {
    let inputResult = input.value.trim().toLowerCase();
    let results = inputResult.length ? fruitKeyWords.filter(keyword => keyword.toLowerCase().includes(inputResult)) : [];
    showSuggestions(results);

        const imageUrl = fruitImages[inputResult];
        if (imageUrl) {
            document.getElementById('fruitImage').src = imageUrl;
            document.getElementById('fruitImage').alt = inputResult;
            document.getElementById('fruitImage').style.display = 'block';
        } else {
            document.getElementById('fruitImage').style.display = 'none';
        }
});

suggestions.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI') {
        document.querySelectorAll('.suggestions li').forEach(item => item.classList.remove('highlighted'));
    }
});

suggestions.addEventListener('click', useSuggestion);