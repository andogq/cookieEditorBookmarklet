function makeWindow() {
    var holder = document.createExpression("div");
    holder.innerHTML = "<div id=\"cookieWindow\"></div>";
    var window = holder.firstChild();
    document.body.append(window);
}