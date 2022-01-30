var elements = document.getElementsByClassName('copy-text');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        this.select();
        document.execCommand('copy');
    });
};