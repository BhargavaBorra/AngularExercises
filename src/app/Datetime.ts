interface ClockInterface {
    currentTime: Date;
}

export class Clock implements ClockInterface {
    currentTime: Date ;
    constructor(currentTime : Date) {
        this.currentTime=currentTime;
     }

     DateTime()
     {
         return (this.currentTime.toLocaleString())
     }

}

