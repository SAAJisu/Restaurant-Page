export function initializePage() {
    const contentDiv = document.getElementById('content');


    const image = document.createElement('img');
    image.src = 'https://dummyimage.com/600x400/000/fff&text=Our+Restaurant';
    image.width = 600;
    image.height = 400;
    contentDiv.appendChild(image);

    const heading = document.createElement('h1');
    heading.textContent= 'Welcome to our restaurant';
    contentDiv.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.';
    contentDiv.appendChild(paragraph);

}