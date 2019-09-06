// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicEntry = document.querySelector('.topics');




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(element => {
            const newInfoTab = newTab(element);
            topicEntry.appendChild(newInfoTab);
        });
    })
    .catch (error => {
        console.log("The data was not returned", error);
    });

function newTab(title) {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = `${title}`;

    return tab
}