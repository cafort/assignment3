$(document).ready(function () {

    //====== GALLERY =======
    
    function gallery() {
        // Create array of image objects
       
       var images = [{
                "img": "assets/selfie.jpg",
                "cutline": "An old-fashioned selfie in a Hobby Lobby"
            },
            {
                "img": "assets/tablecat.jpg",
                "cutline": "Cat under a chrome table"
            },
            {
                "img": "assets/waterslide.jpg",
                "cutline": "An old water slide in Oklahoma"
            },
            {
                "img": "assets/eaglebike.jpg",
                "cutline": "An eagle bike in downtown Springdale"
            },
            {
                "img": "assets/treeworker.jpg",
                "cutline": "Helping to clean up the Fort Smith National Cemetery"
            },
            {
                "img": "assets/lightbulb.jpg",
                "cutline": "Showing the heat from an incandescent bulb using an infrared camera"
            },
            {
                "img": "assets/mall.jpg",
                "cutline": "Walking at the mall in Rogers"
            },
        ];

        //Set up gallery slide container and the image, cutline, and counter
        var gallerySlide = document.getElementById("slide");
        var galleryImage = document.getElementById("galleryImage");
        var galleryCutline = document.getElementById("galleryCutline");
        var galleryCounter = document.getElementById("galleryCounter");

        //Set initial index to zero and set initial img, cutline and counter
        var i = 0;
        galleryImage.src = images[i].img;
        galleryCutline.innerHTML = images[i].cutline;
        galleryCounter.innerHTML = [i + 1] + "/" + images.length;

        //jquery to fade out image, change src, cutline and counter to index position, and fade in image
        function imgFader() {
            $(gallerySlide).fadeOut(500, function () {
                galleryImage.src = images[i].img;
                galleryCutline.innerHTML = images[i].cutline;
                $(gallerySlide).fadeIn(500);
                galleryCounter.innerHTML = [i + 1] + "/" + images.length;
            });
        };

        //Add event listener for the Next button
        document.getElementById("nextBtn").addEventListener("click", advance);

        //If the index is less number of images remaining minus one, show the next one. Otherwise, start over and set the index to zero.
        function advance() {
            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            };
            imgFader();
        };

        //Add event listener for the back button
        document.getElementById("previousBtn").addEventListener("click", previous);

        //If the index is greater than 0, show the previous image and decrement index, otherwise show the last image and set index to max.
        function previous() {
            if (i > 0) {
                i--;
            } else {
                i = images.length - 1;
            };
            imgFader();
        }
    };

    gallery();

});