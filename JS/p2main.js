/*
    Name: Kevin Thomas
    Filename: p2.html
    Date: 2025-03-24
    Description: js code that makes an image libary by looping thorugh images 
    and it gives the user the option to darken the images
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declaring the alternative text for each image file */
const alts = {'pic1.jpg' : 'human eye','pic2.jpg' : 'wave','pic3.jpg' : 'Purple and white flowers','pic4.jpg' : 'wall mural','pic5.jpg' : 'butterfly'}

/* Looping through images 
   makes a constant called image of the images array
   makes a constant called newimage which creates an element with an img tag
   sets src and alt atributes according to the file location of image and the alts array
   appends the child image called newImage
   adds a listener that listens for a click on the displayed image and swaps the image depending on that click*/
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {displayedImage.src = e.target.src; displayedImage.alt = e.target.alt;});
  }  

/* Wiring up the Darken/Lighten button 
   makes a listener for the btn that listens for a click on the btn
   creates a constant that gets the class atribute from the btn
   if that atribute is dark then it sets the class atribute to light and it changes the text of the btn to lighten and darkens the image
   else it then it sets the class atribute to dark and it changes the text of the btn to darken and restores the image to original state
   */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });