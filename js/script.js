const { createApp } = Vue;

createApp ({
    data () {
        return {
            imagesArray : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            currentIndex: 0,
            currentImage: 'img/01.webp',
            currentTitle: 'Marvel\'s Spiderman Miles Morale',
            currentText: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }
    },
    methods: {
        slideBefore: function (){
            const thumbnails = document.getElementById('thumbnails').childNodes;
            thumbnails[this.currentIndex].classList.add('gray');

            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.imagesArray.length - 1
            };
            // Call a function that switch the image with the associated index
            this.changeItem();
        },
        slideAfter: function (){
            const thumbnails = document.getElementById('thumbnails').childNodes;
            thumbnails[this.currentIndex].classList.add('gray');

            this.currentIndex++;
            if (this.currentIndex > this.imagesArray.length - 1) {
                this.currentIndex = 0;
            };
            // Call a function that switch the image with the associated index
            this.changeItem();
        },
        /**
         * Takes the value of the currentIndex and show the right element
         * 
         */
        changeItem: function(){
            this.currentImage = this.imagesArray[this.currentIndex].image;
            this.currentTitle = this.imagesArray[this.currentIndex].title;
            this.currentText = this.imagesArray[this.currentIndex].text;

            const thumbnails = document.getElementById('thumbnails').childNodes;
            thumbnails[this.currentIndex].classList.remove('gray')
        },
        /**
         * Crete as much thumbnails as much images are in the array
         * 
         * @param {*} el container of the thumbnail
         */
        createThumbnails: function(el){
            el.innerHTML = ''

            this.imagesArray.forEach((immagine, index) => {
                // Create a new img.thumbnail
                let newThumbnail = document.createElement('img'); 
                newThumbnail.src = immagine.image;
                newThumbnail.classList.add("thumbnail");

                // If it's not the image vizualized, add a gray filter
                if (this.currentIndex != index) {
                    newThumbnail.classList.add("gray")
                };

                // On the click, the showing image has to be the one clicked
                newThumbnail.addEventListener('click', (switchTo) => {
                    const thumbnails = document.getElementById('thumbnails').childNodes;
                    thumbnails[this.currentIndex].classList.add('gray');
                    this.currentIndex = index;
                    this.changeItem();
                });

                // Add the image in the thumbnail container
                el.appendChild(newThumbnail);
            })
        },
        /**
         * Takes the values of the input and generate a new image with those 
         * 
         */
        addImg: function() {
            let newImg = {};
            // Take the values in the inputs
            newImg.image = document.getElementById('newSrc').value;
            newImg.title = document.getElementById('newTitle').value;
            newImg.text = document.getElementById('newText').value;

            // Empty the values
            document.getElementById('newSrc').value = '';
            document.getElementById('newTitle').value = '';
            document.getElementById('newText').value = '';

            // Add a new img and insert in the thumbnail
            this.imagesArray.push(newImg);
            this.createThumbnails(document.getElementById("thumbnails"));
        }
    },
    mounted() {
        // At the start, create the thumbnails as much as are the images in the array
        this.createThumbnails(document.getElementById("thumbnails"));
        
    }
}).mount('#app');

let button = document.getElementById('submit');
console.log(button);