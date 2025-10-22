// Function to open YouTube videos in modal
function openVideo(url) {
    document.getElementById('videoFrame').src = url;
    document.getElementById('videoModal').style.display = 'flex';
}

// Function to close video modal
function closeVideo() {
    document.getElementById('videoFrame').src = '';
    document.getElementById('videoModal').style.display = 'none';
}

// Close modal when clicking outside the video
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideo();
    }
});

// Contact buttons functionality
document.querySelector('.call-now').addEventListener('click', function() {
    window.location.href = 'tel:+971524651786';
});

document.querySelector('.whatsapp-now').addEventListener('click', function() {
    window.open('https://wa.me/971524651786', '_blank');
});

// Function to open LinkedIn post
function openLinkedInPost() {
    // Replace with your actual LinkedIn post URL
    window.open('https://www.linkedin.com/feed/update/urn:li:activity:YOUR_POST_ID', '_blank');
}

// Function to download files
function downloadFile(filename) {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add click event to download button
document.querySelector('.download-button').addEventListener('click', function() {
    downloadFile('dubai-real-estate-guide.pdf');
});