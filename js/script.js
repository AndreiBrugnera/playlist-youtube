
function playInArea(videoId) {
    var playerArea = document.getElementById('playerArea');
    playerArea.innerHTML = '';
    var iFrame = document.createElement('iframe');
    iFrame.setAttribute('id', 'ytplayer');
    iFrame.setAttribute('type', 'text/html');
    iFrame.setAttribute('width', 740);
    iFrame.setAttribute('height', 450);
    iFrame.setAttribute('src',
        'http://www.youtube.com/embed/' +
        videoId +
        "?autoplay=1");
    iFrame.setAttribute('frameborder', 0);
    playerArea.appendChild(iFrame);
}

function getLink() {
    var linka = document.getElementById('link');
    var videoId = getVideoId(linka.value);
    playInArea(videoId);
}
function getVideoId(url) {
    return url.substring(
        url.indexOf("=") + 1,
        url.length);
}


/* SETA AS THUMBS LATERAIS*/

// function getLink2() {
//     var linka = document.getElementById('link');
//     var videoId = getVideoId(linka.value);
//     playInArea2(videoId);
// }
// function playInArea2(videoId) {
//     var playerArea2 = document.getElementById('playerArea2');
//     playerArea2.innerHTML = '';
//     var Image = document.createElement('img');
//     Image.setAttribute('src',
//         'https://img.youtube.com/vi/' +
//         videoId +
//         "/0.jpg");
//     playerArea2.appendChild(Image);
// }

/*
FILAAA
function Queue() {

    let items = [];

    // adição de novos elementos
    this.enqueue = function(element){
        items.push(element);
    }

    // pegando o primeiro elemento
    this.dequeue = function(){
        return items.shift();
    }

    // apenas olhando o começo da fila, sem retirar
    this.front = function(){
        return items[0];
    }

    this.isEmpty() = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }

}

//FILAA 2

//ECMASCRIPT 6
let QueueWM = (function() {
    
    const items = new WeakMap();
    
    class QueueWM {
        constructor() {
            items.set(this,[]);
        }

        enqueue(element) {
            let q = items.get(this);
        }
        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
    }   
    return QueueWM;
})();

*/