var coll = document.getElementsByClassName("collapsible");
var animationDelay = 200;
function calcMaxHeight(elem) {
    var content = elem.nextElementSibling;
    if (elem.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    }
    else {
        content.style.maxHeight = "0";
    };
    var nextParentContent = elem.closest(".content");
    if (nextParentContent !== null) {
        var nextParentCollapsible = nextParentContent.previousElementSibling;
        setTimeout(function() {
            calcMaxHeight(nextParentCollapsible);
        }, animationDelay);
    };
};
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        calcMaxHeight(this);
    });
}
