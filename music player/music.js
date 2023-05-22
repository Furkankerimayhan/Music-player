class Music {
    constructor(title, singer, img, file, video){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;     
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Gel Benimle", "Yaşar", "1.jpg", "benimle.mp3"),
    new Music("Sevdik sevdalandık", "Reyhan Karaca", "2.jpg", "sevdalandık.mp3"),
    new Music("Her Şey Senle", "Furkan Kızılay", "3.jpg", "senle.mp3"),

]