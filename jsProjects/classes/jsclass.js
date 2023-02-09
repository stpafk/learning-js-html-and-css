// classes in JS uses: extends, constructor, super, get, set and static

class Employee{
    constructor (_salary, task){
        this._salary = _salary; // construct its properties
        this.task = task;
        this.hours = 40;
    }

    get salary(){
        return this._salary //returns the val
    }

    get employeeTask(){
        return this.task;
    }

    set newSalary(_salary){ //set new val to this.something
        this._salary = _salary;
    }

    static turn(){ // function
        console.log('8:00AM to 4:00PM');
    }
    static hoursWeek(){
        console.log('40H')
    }
    taxGov(){
        console.log((this._salary * 0.2)); 
    }

    dollarsPerHour(){
        console.log((this._salary / this.hours));
    }

};

let employee_ = new Employee(1800);
console.log(employee_.salary)
employee_.taxGov()
employee_.dollarsPerHour()

class Junior extends Employee {
    constructor(task, hours){
        super(task);
        this.hours = hours
    }

};