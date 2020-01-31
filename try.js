//Require Mongoose
const mongoose = require('mongoose');

//Connection
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParse: true});
const conn = mongoose.connection;

//Create Schema
const trySchema = new mongoose.Schema({
    course: String,
    fee: Number
});

//Create Model
const tryModel = new mongoose.model('nnn', trySchema);

//Data
const data = new tryModel({
    course: "BCOM",
    fee: 5000
});


//Save
conn.once('open', function(){
        //***Insertion***
    /*
    data.save(function(err, res){
        console.log(res);
        conn.close();
    });
    */

    //***Read***
            
    tryModel.find({}, function(err, data){    //Display All the Records
    //tryModel.findOne({}, function(err, data){     //Display the First Record
    //tryModel.findById({_id:"5e2da04d888be426349fb55a"}, function(err, data){     //Find By Id
    //tryModel.find({name:"nNNN"}, function(err, data){     //Find By the Field(Name)
    //tryModel.findOne({name:"nNNN"}, function(err, data){     //Find By the Field(Name) [Same as the Above]
        if(err){
            throw error;
        }else{
            console.log(data);
            conn.close();
        }
    });
    
   
        //***Updation***
    /*
    tryModel.findOneAndUpdate({name:"NNN"}, {fee:40000}, function(err, data){
        if(err){
            throw error;
        }else{
            console.log(data);
            conn.close();
        }
    });
    */


        //***Deletion***
    /*
    tryModel.findOneAndDelete({_id:"5e2d9e05bac93d24140da399"}, function(err, data){
        if(err){
            throw error;
        }else{
            console.log(data);
            conn.close();
        }
    });
    */
    
            

});



