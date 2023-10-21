function addComment() {
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value;
    if (commentText.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    let commentList = document.getElementById("comment-list");
    let newComment = document.createElement("li");
    newComment.innerHTML = commentText + ' <button class="delete-btn" onclick="deleteComment(this)">Delete</button>';
    commentList.appendChild(newComment);

    newComment.classList.add("comment-item");

    commentInput.value = "";
}

function deleteComment(commentElement) {
    let commentList = document.getElementById("comment-list");
    commentList.removeChild(commentElement.parentNode);
}

function validarEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;

    if (email.includes("@")) {
        alert("Email registered successfully!");
        emailInput.value = "";
    } else {
        alert("Invalid Email. Please enter a valid email address");
    }
}
