// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newHeader = document.createElement('div'),
            date = document.createElement('span'),
            title = document.createElement('h1'),
            temperature = document.createElement('span');

    newHeader.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    date.textContent = 'August 6, 2019';
    title.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    newHeader.appendChild(date);
    newHeader.appendChild(title);
    newHeader.appendChild(temperature);

    return newHeader
}
console.log(Header);
const headerFunction = document.querySelector('.header-container');
console.log(headerFunction);
headerFunction.appendChild(Header());
