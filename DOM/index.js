// why its showing error when using HTMLInputElement (which is actually a input element) - caught as typescript onlu knows that documnet.anyquery will return HTMLElement
// but we may know it can be input or button or anchor any thing so we should use type assertions provided by ts to get exact types.
var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var generateAnchors = document.getElementById("generate-anchors");
var anchorElements = document.querySelector(".anchor-elements");
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(email.value, password.value);
});
generateAnchors.addEventListener("click", function () {
    console.log("hello");
    var listTag = document.createElement("ol"); //  It's HTMLOList but i given UList still taken
    for (var i = 0; i < 10; i++) {
        var listItemTag = document.createElement("li");
        listItemTag.appendChild(randomAnchor(i));
        listTag.appendChild(listItemTag);
    }
    ;
    anchorElements.appendChild(listTag);
});
var randomAnchor = function (i) {
    var aTag = document.createElement("a");
    aTag.appendChild(document.createTextNode("link" + i));
    aTag.href = "https://localhost:3000/" + i;
    aTag.title = "link" + i;
    return aTag;
};
// try for other html types anchor, list, other events etc
