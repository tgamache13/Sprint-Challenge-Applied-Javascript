// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleEntry = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles['javascript'].forEach((topic => {
    
                const newArticle = createCard(topic.headline, topic.authorPhoto, topic.authorName);
                articleEntry.appendChild(newArticle);
            }))
            response.data.articles['bootstrap'].forEach((topic => {
    
                const newArticle = createCard(topic.headline, topic.authorPhoto, topic.authorName);
                articleEntry.appendChild(newArticle);
            }))
            response.data.articles['technology'].forEach((topic => {
    
                const newArticle = createCard(topic.headline, topic.authorPhoto, topic.authorName);
                articleEntry.appendChild(newArticle);
            }))
            response.data.articles['jquery'].forEach((topic => {
    
                const newArticle = createCard(topic.headline, topic.authorPhoto, topic.authorName);
                articleEntry.appendChild(newArticle);
            }))
            response.data.articles['node'].forEach((topic => {
    
                const newArticle = createCard(topic.headline, topic.authorPhoto, topic.authorName);
                articleEntry.appendChild(newArticle);
            }))
        })
    .catch(error => {
        console.log("The data was not returned", error);
    })


function createCard(title, imgUrl, authorsName) {
    const card = document.createElement('div'),
        headLine = document.createElement('div'),
        author = document.createElement('div'),
        imageContainer = document.createElement('div'),
        image = document.createElement('img'),
        by = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    image.src = imgUrl;

    headLine.textContent = `${title}`;
    author.textContent = `${authorsName}`;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(by);

    return card

}