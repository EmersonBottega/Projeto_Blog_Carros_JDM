function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;

    if (commentText.trim() === "") {
        alert("Please enter a comment.");
        return;
    } else if (commentText.length > 44){
        alert("You have reached the limit of caracters (44).")
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
        alert("Email registered successfully!");
        emailInput.value = "";
    } else {
        alert("Invalid Email. Please enter a valid email address");
    }
}
