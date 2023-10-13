const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/music_player_db');
const MusicPlayerDBSchema=new mongoose.Schema({
    name:String,
    contact:String,
    email:String
});

const saveInDB= async ()=>{

const MusicPlayerDBModel=mongoose.model('users',MusicPlayerDBSchema);
let data=new MusicPlayerDBModel({name:"Sanjay Shukla",contact:'9848484877',email:'sanjay@yopmail.com'});
let result=await data.save();
console.log(result);
}
//saveInDB();
const updateInDB= async ()=>{
    const MusicPlayerDBModel=mongoose.model('users',MusicPlayerDBSchema);
    let result= await MusicPlayerDBModel.updateOne({name:'Shiva'},{$set:{contact:'9474777747',email:'shiva@yopmail.com'}});  
    
console.log(result);
}

//updateInDB();
const deleteInDB= async ()=>{
    const MusicPlayerDBModel=mongoose.model('users',MusicPlayerDBSchema);
    let result= await MusicPlayerDBModel.deleteOne({name:'Raj'});  
    
console.log(result);
}
//deleteInDB();

const findInDB= async ()=>{
    const MusicPlayerDBModel=mongoose.model('users',MusicPlayerDBSchema);
   // let result= await MusicPlayerDBModel.findOne({name:'Shiva'}); // retrieve specific record
   // let result= await MusicPlayerDBModel.findOne();  //retrieve first record
   let result= await MusicPlayerDBModel.find(); //retrive list of records
    
console.log(result);
}
findInDB();
