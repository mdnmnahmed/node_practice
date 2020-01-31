const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
const conn = mongoose.connection;

const employeeScheema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour:  Number,
    total:  Number
});
employeeScheema.methods.totalSalary = function(){
    return this.hourlyrate * this.totalHour;
}

var employeeModel = mongoose.model('Employee', employeeScheema);
var employees = new employeeModel({
    name: 'Ujjual',
    email: 'ujjual@gmail.com',
    etype: 'Android Seveloper',
    hourlyrate: 100,
    totalHour: 160
});

employees.total = employees.totalSalary();

conn.on("connected", function(){
    console.log("Connected Successfully");
});
conn.on("disconnected", function(){
    console.log("DisConnected Successfully");
});

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function(){
    employees.save(function(err,res){
        if(err) throw error;

        console.log(res);

        conn.close();
    });
});