let bookmarks = [];

// Function to add a new bookmark
function addBookmark() {
    const nameInput = document.getElementById("bookmarkName").value.trim();
    const linkInput = document.getElementById("bookmarkLink").value.trim();

    if (nameInput && linkInput) {
        // Add the bookmark as an object
        bookmarks.push({ name: nameInput, link: linkInput });
        displayBookmarks();
        clearInputs();
    } else {
        alert("Please enter both a name and a URL for the bookmark.");
    }
}

// Function to display the bookmarks
function displayBookmarks() {
    const bookmarkList = document.getElementById("bookmarkItems");
    bookmarkList.innerHTML = ""; // Clear the existing items

    // Loop through each bookmark and add it as a list item
    bookmarks.forEach((bookmark) => {
        const listItem = document.createElement("li");
        listItem.classList.add("bookmark-item");

        const bookmarkLink = document.createElement("a");
        bookmarkLink.href = bookmark.link;
        bookmarkLink.target = "_blank";
        bookmarkLink.textContent = bookmark.name;

        listItem.appendChild(bookmarkLink); // Append link to the list item
        bookmarkList.appendChild(listItem); // Append the item to the bookmark list
    });
}

// Function to clear input fields
function clearInputs() {
    document.getElementById("bookmarkName").value = "";
    document.getElementById("bookmarkLink").value = "";
}

// Function to sort bookmarks alphabetically by name
function sortBookmarks() {
    bookmarks.sort((a, b) => a.name.localeCompare(b.name));
    displayBookmarks(); // Refresh the displayed bookmarks
}
