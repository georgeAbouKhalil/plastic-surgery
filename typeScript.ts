class Doctors{
    name_doctor:String
    number_doctor:String
    specialty:String
    experience:number
    payment_per_hour:number
    work_hours:number
    constructor(name_doctor:String,number_doctor:String,specialty:String,experience:number,payment_per_hour:number,work_hours:number){
        this.name_doctor = name_doctor
        this.number_doctor = number_doctor
        this.specialty = specialty
        this.experience = experience
        this.payment_per_hour = payment_per_hour
        this.work_hours = work_hours
    }
    set setName_doctor(name_doctor: String){
        this.name_doctor = name_doctor
    }
    get getName_doctor():String {
        return this.name_doctor
    }
    set setNumber_doctor(number_doctor: String){
        this.number_doctor = number_doctor
    }
    get getNumber_doctor():String {
        return this.name_doctor
    }
    set setSpecialty(specialty: String){
        this.specialty = specialty
    }
    get getSpecialty():String {
        return this.specialty
    }
    set setExperience(experience: number){
        this.experience = experience
    }
    get getExperience():number {
        return this.experience
    }
    set setPayment_per_hour(payment_per_hour: number){
        this.payment_per_hour = payment_per_hour
    }
    get getPayment_per_hour():number {
        return this.payment_per_hour
    }
    
    set setWork_hours(work_hours: number){
        this.work_hours = work_hours
    }
    get getWork_hours():number {
        return this.work_hours
    }
    toString(){
        return "The name of the doctors ["+this.name_doctor+"] and his id is ["+this.number_doctor+"] his specialty is ["+this.specialty+"] he have ["+this.experience+
        "] experience years and his payment per hour ["+this.payment_per_hour+"] his work hours ["+this.work_hours+"]"
    }
    
}
let amountOfMoneyPerDay = (paymentPerHour, workHours) => paymentPerHour * workHours;

var doctor = new Doctors("Jame","125","noise",23,35,250);
    document.write("<font size=5>"+ doctor + "<br> <br>");

var doctor2 = new Doctors("David","1","back",24,36,260)
document.write("<font size=5>"+ doctor2 + "<br> <br>")

document.write("the salary per day is : $"+amountOfMoneyPerDay(9.20, 8));