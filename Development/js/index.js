function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;

    if (commentText.trim() === "") {
        showAlert("The field is empty. Write something!");
        return;
    } else if (commentText.length > 40) {
        showAlert("You have reached the limit of characters (40). Try again!");
        return;
    }

    const commentList = document.getElementById("comment-list");
    let newComment = document.createElement("li");
    newComment.innerHTML = commentText + ' <button class="delete-btn" onclick="deleteComment(this)">Delete</button>';
    commentList.appendChild(newComment);
    newComment.classList.add("comment-item");
    commentInput.value = "";
}

function deleteComment(commentElement) {
    const commentList = document.getElementById("comment-list");
    commentList.removeChild(commentElement.parentNode);
}

function validarEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (email.includes("@")) {
        showSuccessModal("Email registered successfully!");
        emailInput.value = "";
    }else {
        showErrorModal("Invalid Email. Please enter a valid email address!");
    }
}

function showAlert(message) {
    document.getElementById("alertMessage").innerText = message;
    openModal('alertModal');
}

function showSuccessModal(message) {
    document.getElementById("successMessage").innerText = message;
    openModal('successModal');
}

function showErrorModal(message) {
    document.getElementById("errorMessage").innerText = message;
    openModal('errorModal');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
};
