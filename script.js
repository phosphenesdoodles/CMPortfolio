document.addEventListener('DOMContentLoaded', () => {
    // Select all dropbtn elements
    const dropButtons = document.querySelectorAll('.dropbtn');
    
    // Loop through each dropbtn
    dropButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the click from bubbling up to document (to prevent closing the dropdown immediately)
            event.stopPropagation();

            // Find the associated dropdown-content
            const dropdownContent = button.nextElementSibling;

            // Toggle the dropdown-content visibility
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            } else {
                // Close all other dropdown-content elements
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.classList.remove('show');
                });
                // Show the current dropdown-content
                dropdownContent.classList.add('show');
            }
        });
    });

    // Close dropdown-content if user clicks outside of any dropdown or arrows
    document.addEventListener('click', (event) => {
        const isClickInsideDropdown = event.target.closest('.dropdown');
        const isClickOnArrow = event.target.closest('.arrow');

        // If the click is outside of the dropdown and not on an arrow, hide all dropdowns
        if (!isClickInsideDropdown && !isClickOnArrow) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });

    // Add event listener for close button
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const dropdownContent = event.target.closest('.dropdown-content');
            dropdownContent.classList.remove('show');
        });
    });
});

// Function to handle image change for each gallery
function changeImage(event, direction) {
    const gallery = event.target.closest('.gallery');
    const images = gallery.querySelectorAll('.gallery-img');
    let currentImageIndex = Array.from(images).findIndex(image => image.style.display === 'block');

    // If no image is displayed, show the first image
    if (currentImageIndex === -1) {
        currentImageIndex = 0;
    }

    // Update current image index based on direction
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Show the selected image
    images[currentImageIndex].style.display = 'block';
}

// Initialize galleries to show only the first image
document.querySelectorAll('.gallery').forEach(gallery => {
    const firstImage = gallery.querySelector('.gallery-img');
    if (firstImage) {
        firstImage.style.display = 'block';
    }
});
function changeVideo(event, direction) {
    const gallery = event.target.closest('.video-gallery');
    const videos = gallery.querySelectorAll('.gallery-video');
    let currentVideoIndex = Array.from(videos).findIndex(video => video.style.display === 'block');

    if (currentVideoIndex === -1) {
        currentVideoIndex = 0;
    }

    // Update current video index based on direction
    currentVideoIndex += direction;

    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    // Hide all videos
    videos.forEach(video => {
        video.style.display = 'none';
    });

    // Show the selected video
    videos[currentVideoIndex].style.display = 'block';
}

// Initialize videos to show only the first video
document.querySelectorAll('.video-gallery').forEach(gallery => {
    const firstVideo = gallery.querySelector('.gallery-video');
    if (firstVideo) {
        firstVideo.style.display = 'block';
    }
});
