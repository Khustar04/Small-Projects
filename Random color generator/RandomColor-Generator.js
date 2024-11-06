function getrandcolor() {
    let randomcolors = "0123456789ABCDEF"
    let colors = "#"
    for (let i = 0; i < 6; i++) {
        colors += randomcolors[Math.floor(Math.random() * 16)]



    }
    return colors;
}

const a = document.getElementsByClassName("box");

Array.from(a).forEach(box => {
    const boxcolor = getrandcolor()
    const textcolor = getrandcolor()

    box.style.backgroundColor = boxcolor
    box.style.color = textcolor
    box.textContent = box.textContent
})



