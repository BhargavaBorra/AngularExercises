enum Week {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
var DisplayWeek: String;
 
export class FindingWeek{
    constructor(){}
 findWeek(y: String) :String 
 {
     var x = Number(y);
    if (x >=1 && x <= 7) {
        DisplayWeek=Week[x];
        return DisplayWeek;
      }
    else{
      DisplayWeek ="Please enter a number between 1 and 7";
      return DisplayWeek;
    }
    }
}