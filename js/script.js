

    function playInArea(videoId) {
        var playerArea = document.getElementById('playerArea');
//    playerArea.innerHTML = '';
        var iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', 'ytplayer');
        iFrame.setAttribute('type', 'text/html');
        iFrame.setAttribute('width', 340);
        iFrame.setAttribute('height', 220);
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

function Queue() {
    let items = [];

    // adição de novos elementos
    this.enqueue = function (element) {
        items.push(element);
    }

    // pegando o primeiro elemento
    this.dequeue = function () {
        return items.shift();
    }

    // apenas olhando o começo da fila, sem retirar
    this.front = function () {
        return items[0];
    }

    function isEmpty() {
        return items.length == 0;
    }

    this.size = function () {
        return items.length;
    }

    this.print = function () {
        console.log(items.toString());
    }

}

const p = new Queue();
p.enqueue(2);
p.enqueue(1);
p.print();

//
//function Queuee() {
//    this.data = [];
//}
//
//Queue.prototype.add = function (record) {
//    this.data.unshift(record);
//}
//
//Queue.prototype.remove = function () {
//    this.data.pop();
//}
//
//Queue.prototype.first = function () {
//    return this.data[0];
//}
//
//Queue.prototype.last = function () {
//    return this.data[this.data.length - 1];
//}
//
//Queue.prototype.size = function () {
//    return this.data.length;
//}


// Create a Queue
//const q = new Queue();
//q.add(1);
//q.add(2);
//q.add(3);
//console.log(q);
//console.log(`Size of the Queue: ${q.size()}`)





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