function scrollThroughContent(id) {
    const elem = document.getElementById(id);
    elem.scrollIntoView({block: "end", behavior: "smooth"})
}
