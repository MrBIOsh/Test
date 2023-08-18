const header = document.getElementById("header");
const form = document.getElementById("form");
const schedule = document.getElementById("schedule");

const getItemTopCoord = schedule.getBoundingClientRect().top;
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

const getOffsetItems = getItemTopDocumentCoord - header.getBoundingClientRect().height / 2;



window.onscroll = function(){
    stickyFunction();
};

function stickyFunction() {
    if (document.documentElement.scrollTop >= getOffsetItems) {
        header.style.position = "absolute";
        header.style.top = getItemTopDocumentCoord - header.getBoundingClientRect().height / 2 + "px";
    } else if (document.documentElement.scrollTop <= getOffsetItems) {        
        header.style.position = "fixed";
        header.style.top = 0;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
