export function aboutMeTab() {
    const contentDiv = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent= 'Welcome to our restaurant';
    contentDiv.appendChild(heading);
}