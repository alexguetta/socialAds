// JavaScript for dynamically loading video
document.addEventListener('DOMContentLoaded', function() {
  var videoPlayer = document.getElementById('videoPlayer');
  var videoUrl = 'video.mp4'; // Replace with actual video URL
  videoPlayer.innerHTML = '<video controls><source src="' + videoUrl + '" type="video/mp4">Your browser does not support the video tag.</video>';
});

// JavaScript for dynamically loading images
document.addEventListener('DOMContentLoaded', function() {
  var resultsGallery = document.getElementById('resultsGallery');
  var images = ['images/img1.jpeg', 'images/img2.jpeg', 'images/img3.jpeg', 'images/img4.jpeg']; // Replace with actual image URLs
  var imagesHTML = '';
  images.forEach(function(image) {
    imagesHTML += '<img src="' + image + '" alt="Result">';
  });
  resultsGallery.innerHTML = imagesHTML;
});
