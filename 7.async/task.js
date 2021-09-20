"use strict";

class AlarmClock {
    constructor() { 
        this.alarmCollection = [];//массив звонков
        this.timerId = null;//идентификатор таймера ссылается на интервал
    }
    //добавляет новый звонок в коллекцию существующих
    addClock(time, cb, id){
        let review = false;
        this.alarmCollection.forEach(alarm => {
            if (alarm.id === id){
                console.error('invalid id');
                review = true;
            }
        }) 
        //console.log(id);
        if (review) return
        if (!id){
            throw new Error('error text');
        } else this.alarmCollection.push({time, cb, id})
        //console.log(this.alarmCollection);
    }
    //удаляет определённый звонок
    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id); 
    }
    //возвращает текущее время в строковом формате HH:MM
    getCurrentFormattedTime (){
        let HH = new Date().getHours();
        let MM = new Date().getMinutes();
        return `${HH < 10 ? '0' + HH : HH}:${MM < 10 ? '0' + MM : MM}`;
    }
    //запускает все звонки
    start () {
        console.log('timer', this.timerId);
        if (!this.timerId){console.log('timer', this.timerId);
            this.timerId = setInterval(() => {console.log('123', this.timerId);
                this.alarmCollection.forEach(alarm => {
                    this.checkClock(alarm);
                })
            }, 1000)
        }
    }

    checkClock (alarm){
        let currentTime = this.getCurrentFormattedTime();
        if (alarm.time === currentTime){
            alarm.cb();
        }  
    }

    //stop
    stop(){
        if (this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        } 
    }
    //печатает все звонки
    printAlarms(){
        this.alarmCollection.forEach(alarm => {
            console.log(`Будильник ${alarm.id} заведен на ${alarm.time}`);
        })
    }
    //удаляет все звонки
    clearAlarms(){
        this.alarmCollection = [];
    }
}

let clock = new AlarmClock ();
clock.addClock("16:45", f => f, 1);
clock.addClock("16:45", f => f, 1);
clock.start();
clock.stop();

