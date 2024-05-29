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
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.imagesArray.length - 1
            };
            // Call a function that switch the image with the associated index
            this.changeItem();
        },
        slideAfter: function (){
            this.currentIndex++;
            if (this.currentIndex > this.imagesArray.length - 1) {
                this.currentIndex = 0;
            };
            // Call a function that switch the image with the associated index
            this.changeItem();
            this.crea();
        },
        changeItem: function(){
            this.currentImage = this.imagesArray[this.currentIndex].image;
            this.currentTitle = this.imagesArray[this.currentIndex].title;
            this.currentText = this.imagesArray[this.currentIndex].text;
        },
        createThumbnails: function(el){
            this.imagesArray.forEach(immagine => {
                let newThumbnail = document.createElement('img');
                newThumbnail.src = immagine.image;
                newThumbnail.classList.add("gray", "thumbnail")
                el.appendChild(newThumbnail);
            })
        },
    },
    mounted() {
        const thumbnailsContainerEl = document.getElementById("thumbnails")
        this.createThumbnails(thumbnailsContainerEl);
    }
}).mount('#app');