class Smile {
    constructor() {
        this.elem = document.createElement("div");
        this.elem.className = "smile";
        this.elem.innerHTML = '<div class = "eye" id = "left-eye"></div> \
        <div class = "eye" id = "right-eye"></div><div class = "mouth"></div>'
        document.body.appendChild(this.elem);
        $(this.elem).draggable();
        $(this.elem).click(() => {
            $(this.elem).toggleClass('red-bg');
        });
    }
}

class Box {
    constructor() {
        this.elem = document.createElement("div");
        this.elem.className = "box";
        document.body.appendChild(this.elem);
        $(this.elem).droppable({
            accept: '.smile',
            drop: function(event, ui) {
                var dropped = ui.draggable;
                var droppedOn = $(this);
                $(dropped).detach().css({
                    top: '-35px',
                    left: 0,
                    "z-index": "-1"
                }).appendTo(droppedOn);
            }
        });
    }
}

$(() => {
    let smile = new Smile();
    let box = new Box();
});
