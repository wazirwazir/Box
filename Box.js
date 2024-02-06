let set = document.getElementsByTagName('button')[0];
let edit = document.getElementsByName('change')
let box = document.getElementsByTagName('div')[0]
let rad = document.getElementsByTagName('input')[0]


set.addEventListener('click', function() {
    box.style.background = edit[0].value;
    box.style.width = edit[1].value;
    box.style.height = edit[2].value;
    box.style.borderRadius = rad.value
})
