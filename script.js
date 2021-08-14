// Event listener to add comment
document.getElementById("submit").addEventListener('click', function(e) {
    const commentArea = document.getElementById("comment-area")
    const nameInput = document.getElementById("user-name")

    if(commentArea.value.length != 0 && nameInput.value.length != 0) {
        const timeNow = new Date()
        let hour = timeNow.getHours()
        let minutes = timeNow.getMinutes()
        minutes = checkTime(minutes)
        let showTime = ""

        if(hour > 12) {
            showTime = (hour - 12) + ":" + minutes + " PM"
        } else {
            showTime = hour + ":" + minutes + "AM"
        }

        const commentContainer = document.getElementById("comment-container")
        const singleComment = document.createElement("div")
        singleComment.classList.add("bg-light", "text-white", "rounded-3", "my-3", "p-4")
        singleComment.innerHTML = `
            <p class="text-dark" id="user-comment">${commentArea.value}</p>
            <p class="text-muted" id="user-name">Posted by ${nameInput.value} on ${showTime}</p>
            <a type="button" class="btn btn-outline-danger btn-sm">Delete</a>`
        commentContainer.appendChild(singleComment)

        commentArea.value = ""
        nameInput.value = ""
    }
    
})

// Remove Comment
const commentContainer = document.getElementById("comment-container")

commentContainer.addEventListener("click", function(e) {
    const commentDiv = e.target.parentNode
    commentContainer.removeChild(commentDiv)
})


// Clock
function clock() {
    const timeNow = new Date()
    let hours = timeNow.getHours()
    let minutes = timeNow.getMinutes()
    let seconds = timeNow.getSeconds()
    minutes = checkTime(minutes)
    seconds = checkTime(seconds)

    if(hours > 12) {
        document.getElementById("time").textContent = hours - 12 + `:${minutes}:${seconds} PM`
    } else {
        document.getElementById("time").textContent = `${hours}:${minutes}:${seconds} AM`
    }

    // Recursive function to update time
    setTimeout(clock, 500)
} 

clock()


// Adding 0 before minutes & seconds when under 0
function checkTime(i) {
    if(i < 10) {
        i = "0" + i
    }
    return i
}






