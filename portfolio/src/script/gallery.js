$(document).ready(function () {

    //====== GALLERY =======

    function gallery() {
        // Create array of image urls
        var images = [
            "http://via.placeholder.com/600x400",
            "http://via.placeholder.com/600x400/fff/ddd",
            "http://via.placeholder.com/600x400/a00/fff",
            "http://via.placeholder.com/600x400/fff/000"
        ];

        //Set initial image index to zero and set initial image
        var i = 0;
        var galleryImage = document.getElementById("galleryImage");
        galleryImage.src = images[i];

        //jquery to fade out image, change source to index position, and fade in image
        function imgFader(){
            $(galleryImage).fadeOut(500, function(){
                galleryImage.src = images[i];
                $(galleryImage).fadeIn(500);
            });
        }

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