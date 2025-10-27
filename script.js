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
    "https://www.linkedin.com/posts/indusrealestatedubai_celebrating-21-years-of-success-the-team-activity-7383397512013033472-PA7_?utm_source=share&utm_medium=member_android&rcm=ACoAAEJjNZIB64aWM24RAJAG8c_cVchn_pKXcss",
    "_blank"
  );
}

function openLinkedInPost2() {
  window.open(
    "https://www.linkedin.com/posts/indusrealestatedubai_%F0%9D%90%B6%F0%9D%91%92%F0%9D%91%99%F0%9D%91%92%F0%9D%91%8F%F0%9D%91%9F%F0%9D%91%8E%F0%9D%91%A1%F0%9D%91%96%F0%9D%91%9B%F0%9D%91%94-%F0%9D%90%B7%F0%9D%91%96%F0%9D%91%A4%F0%9D%91%8E%F0%9D%91%99%F0%9D%91%96-%F0%9D%91%A4%F0%9D%91%96%F0%9D%91%A1%E2%84%8E-activity-7386780777499226113-QvU4?utm_source=share&utm_medium=member_android&rcm=ACoAAEJjNZIB64aWM24RAJAG8c_cVchn_pKXcss",
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