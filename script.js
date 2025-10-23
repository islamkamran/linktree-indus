// Function to open YouTube videos in modal
function openVideo(url) {
  document.getElementById("videoFrame").src = url;
  document.getElementById("videoModal").style.display = "flex";
}

// Function to close video modal
function closeVideo() {
  document.getElementById("videoFrame").src = "";
  document.getElementById("videoModal").style.display = "none";
}

// Close modal when clicking outside the video
document.getElementById("videoModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeVideo();
  }
});

// Contact buttons functionality
function callCompany() {
  window.location.href = "tel:042412888";
}

function whatsappCompany() {
  window.open("https://wa.me/+97180046387", "_blank");
}

// Add event listeners for contact buttons
document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.querySelector(".call-now");
  const whatsappButton = document.querySelector(".whatsapp-now");

  if (callButton) {
    callButton.addEventListener("click", callCompany);
  }

  if (whatsappButton) {
    whatsappButton.addEventListener("click", whatsappCompany);
  }
});

// Function to open LinkedIn post
function openLinkedInPost() {
  window.open(
    "https://www.linkedin.com/company/indusrealestatedubai/posts/?feedView=all",
    "_blank"
  );
}

// Function to download files
function downloadFile(filename) {
  const link = document.createElement("a");
  link.href = filename;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
