function updateList(text, className) {
    var dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.innerHTML = text + ' <span class="icon ' + className + '-icon"></span>';
    dropdownButton.className = className;
}