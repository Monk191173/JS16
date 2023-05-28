'use strict'

let getSel = selector => document.querySelector(selector);
let crTableStr = '';
/*-------------------------------------------------------------functions */
let randColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

let setColor = (e) => {
    getSel('.source-box').style.color = getComputedStyle(e.target).backgroundColor;
    getSel('.color-pannel').style.display = 'none';
}
let setBgcolor = (e) => {
    getSel('.source-box').style.backgroundColor = getComputedStyle(e.target).backgroundColor;
    getSel('.color-pannel').style.display = 'none';
}

/*--------------------------------------------------------------manual edit */

getSel('.edit-btn').addEventListener('click', () => {
    getSel('.style-edit').classList.remove('show');
    getSel('.style-box').classList.remove('showf');
    getSel('.manual-edit').classList.add('show');
    getSel('.color-pannel').style.display = 'none';
    getSel('.edit-txt').value = getSel('.source-box').innerHTML;
})

getSel('.save-btn').addEventListener('click', () => {
    getSel('.source-box').innerHTML = getSel('.edit-txt').value;
    getSel('.manual-edit').classList.remove('show');
})

/*-----------------------------------------------------------------style */
getSel('.style-btn').addEventListener('click', () => {
    getSel('.manual-edit').classList.remove('show');
    getSel('.style-edit').classList.add('show');
    getSel('.style-box').classList.add('showf');
})

getSel('.style-fs').addEventListener('click', (e) => {
    if (e.target.type = 'radio')
        getSel('.source-box').style.fontSize = e.target.value;
})

getSel('.style-opt').addEventListener('change', (e) => {
    getSel('.source-box').style.fontFamily = e.target.value;
})

getSel('.color-btn').addEventListener('click', () => {
    getSel('.color-pannel').style.display = 'flex';
    for (const minBox of getSel('.color-pannel').children) {
        minBox.removeEventListener('click', setBgcolor);
        minBox.addEventListener('click', setColor);
        minBox.style.backgroundColor = randColor();
    }
})

getSel('.bgcolor-btn').addEventListener('click', () => {
    getSel('.color-pannel').style.display = 'flex';
    for (const minBox of getSel('.color-pannel').children) {
        minBox.removeEventListener('click', setColor);
        minBox.addEventListener('click', setBgcolor);
        minBox.style.backgroundColor = randColor();
    }
})

getSel('.bold').addEventListener('click', (e) => {
    if (e.target.checked) getSel('.source-box').style.fontWeight = 'bold'
    else getSel('.source-box').style.fontWeight = ''
})

getSel('.cursive').addEventListener('click', (e) => {
    if (e.target.checked) getSel('.source-box').style.fontStyle = 'italic'
    else getSel('.source-box').style.fontStyle = ''
})

/*-------------------------------------------------------------------------Add */
getSel('.add-btn').addEventListener('click', () => {
    getSel('.source-box').classList.add('hide');
    getSel('.operation-box').classList.add('hide');
    getSel('.edit-box').classList.add('hide');
    getSel('.create-box').classList.add('show');
    getSel('.cr-table').checked = getSel('.cr-list').checked = false;
})

getSel('.cr-table').addEventListener('click', (e) => {
    if (e.target.checked) {
        getSel('.create-table').classList.add('showf');
        getSel('.create-list').classList.remove('showf');
    }
})

getSel('.create-btn').addEventListener('click', () => {
    let rowCount = getSel('[placeholder="Count TR:"]').value;
    let colCount = getSel('[placeholder="Count TD:"]').value;
    let widTD = getSel('[placeholder="Width of TD:"]').value;
    let heiTD = getSel('[placeholder="Height of TD:"]').value;
    let widBorder = getSel('[placeholder="Width:"]').value;
    let typeBorder = getSel('[name=typeBord]').value;
    let colBorder = getSel('[name=colorBord]').value;
    crTableStr = '<table style="border-collapse: collapse;text-align:center;">';
    for (let row = 1; row <= rowCount; row++) {
        crTableStr += '<tr>';
        for (let col = 1; col <= colCount; col++)
            crTableStr += '<td  style="width:' + widTD + 'px;height:' + heiTD + 'px;border: ' + widBorder + 'px ' + typeBorder + ' ' + colBorder + '">TD</td>';
        crTableStr += '</tr>';
    }
    crTableStr += '</table>';
    getSel('.source-box').classList.remove('hide');
    getSel('.operation-box').classList.remove('hide');
    getSel('.edit-box').classList.remove('hide');
    getSel('.create-table').classList.remove('showf');
    getSel('.create-box').classList.remove('show');
    getSel('.edit-txt').value += crTableStr;
})

getSel('.cr-list').addEventListener('click', (e) => {
    if (e.target.checked) {
        getSel('.create-list').classList.add('showf');
        getSel('.create-table').classList.remove('showf');
    }
})

getSel('.createLi-btn').addEventListener('click', () => {
    let liCount = getSel('[name=liCount]').value;
    let typeMark = getSel('[name=mark]').value;
    crTableStr = '<ul style="list-style-type:' + typeMark + ';margin-left:15px">';
    for (let i = 1; i <= liCount; i++)
        crTableStr += '<li>Item ' + i + '</li>';
    crTableStr += '</ul>';
    getSel('.source-box').classList.remove('hide');
    getSel('.operation-box').classList.remove('hide');
    getSel('.edit-box').classList.remove('hide');
    getSel('.create-list').classList.remove('showf');
    getSel('.create-box').classList.remove('show');
    getSel('.edit-txt').value += crTableStr;
})

getSel('.close-btn').addEventListener('click', () => {
    getSel('.source-box').classList.remove('hide');
    getSel('.operation-box').classList.remove('hide');
    getSel('.edit-box').classList.remove('hide');
    getSel('.create-list').classList.remove('showf');
    getSel('.create-box').classList.remove('show');
    getSel('.create-table').classList.remove('showf');
})