// Select all the draggable elements
const draggableElements = document.querySelectorAll('.image');

// Initialize variables to store the source and target elements during drag-and-drop
let dragSrcElement = null;

// Add event listeners for drag and drop
draggableElements.forEach((element) => {
    element.addEventListener('dragstart', handleDragStart);
    element.addEventListener('dragover', handleDragOver);
    element.addEventListener('dragenter', handleDragEnter);
    element.addEventListener('dragleave', handleDragLeave);
    element.addEventListener('drop', handleDrop);
    element.addEventListener('dragend', handleDragEnd);
});

// Function to handle the drag start event
function handleDragStart(e) {
    dragSrcElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

// Function to handle the drag over event
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

// Function to handle the drag enter event
function handleDragEnter(e) {
    this.classList.add('selected');
}

// Function to handle the drag leave event
function handleDragLeave() {
    this.classList.remove('selected');
}

// Function to handle the drop event
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    if (dragSrcElement !== this) {
        // Swap the HTML content of the source and target elements
        dragSrcElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

// Function to handle the drag end event
function handleDragEnd() {
    draggableElements.forEach((element) => {
        element.classList.remove('selected');
    });
}
