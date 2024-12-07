document.addEventListener('DOMContentLoaded', () => {
    
    const dropButtons = document.querySelectorAll('.dropbtn');
    
    
    dropButtons.forEach(button => {
        button.addEventListener('click', (event) => {
           
            event.stopPropagation();

            
            const dropdownContent = button.nextElementSibling;

            
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            } else {
                
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.classList.remove('show');
                });
               
                dropdownContent.classList.add('show');
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInsideDropdown = event.target.closest('.dropdown');
        const isClickOnArrow = event.target.closest('.arrow');

        if (!isClickInsideDropdown && !isClickOnArrow) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });

    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const dropdownContent = event.target.closest('.dropdown-content');
            dropdownContent.classList.remove('show');
        });
    });
});

function changeImage(event, direction) {
    const gallery = event.target.closest('.gallery');
    const images = gallery.querySelectorAll('.gallery-img');
    let currentImageIndex = Array.from(images).findIndex(image => image.style.display === 'block');

    if (currentImageIndex === -1) {
        currentImageIndex = 0;
    }

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    images.forEach(image => {
        image.style.display = 'none';
    });

    images[currentImageIndex].style.display = 'block';
}

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

    currentVideoIndex += direction;

    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    videos.forEach(video => {
        video.style.display = 'none';
    });

    videos[currentVideoIndex].style.display = 'block';
}

document.querySelectorAll('.video-gallery').forEach(gallery => {
    const firstVideo = gallery.querySelector('.gallery-video');
    if (firstVideo) {
        firstVideo.style.display = 'block';
    }
});
