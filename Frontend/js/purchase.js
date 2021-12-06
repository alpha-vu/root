function createNElement(color) {
    if (checkColorCode(color) || checkColorName(color)){
        var NElement = document.createElement('div');
        NElement.className = 'item';
        NElement.style.backgroundColor = color
        var MElement = document.getElementById('purchase');
        MElement.appendChild(NElement)
    } else {
        alert('wrong!')
    }
}

function checkColorCode(color){
    return /^#([0-9A-F]{3}){1,2}$/i.test(color)
}



function checkColorName(color) {
    if (color === ''){
        return false
    }
    const s = new Option().style;
    s.color = color;
    return s.color === color;
}
