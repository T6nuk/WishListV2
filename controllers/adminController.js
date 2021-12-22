const date = require('../getDate.js');
const mongoose = require('mongoose');
const mongoWish = mongoose.model('Wish');



exports.getMainPage = (req, res) => {

    let today = date.getTodayDateLong();
    mongoWish.find((error, wishes) =>{
        if(!error){
            res.render('index.ejs', {date:today, myWishes: wishes});
        } else {
            console.log(error);
        }


    });
};

exports.getAdminPage = (req, res) => {
    
    let today = date.getTodayDateLong();
    mongoWish.find((error, wishes) =>{
        if(!error){
            res.render('admin.ejs', {date:today, myWishes: wishes});
        } else {
            console.log(error);
        }

    });
};

exports.getRandomPage = (req, res) => {
    
    let today = date.getTodayDateLong();
    mongoWish.find((error, wishes) =>{
        let random = randomNumber(0, wishes.length);
        if(!error){
            res.render('random.ejs', {date:today, myWish: wishes[random]});
        } else {
            console.log(error);
        }

    });
};

exports.postNewWish = (req, res) => {
    
    const uWish = req.body.newWish;
    const uDate = date.getTodayDateShort();
    const uImage = req.file.filename;

    let newWish = new mongoWish();
    newWish.description = uWish;
    newWish.image = uImage;
    newWish.date = uDate;
    newWish.save();


    res.redirect('/admin');
};


exports.deleteWish = (req, res) => {
    var fs = require('fs');
    const itemIdCheck = req.body.checkbox;
    const imageName = req.body.imgName;
    let filePath = `./images/${imageName}`;

    fs.unlinkSync(filePath);
    mongoWish.findByIdAndRemove(itemIdCheck, (error)=>{
        if(!error){
            res.redirect('/admin');
        } else {
            console.log("Delete failed")
        }
    })

};

function randomNumber(min, max){
    let randomNum;
    do{
        randomNum = Math.floor(Math.random()*(max-min))+min;
    } while (randomNum===randomNumber.last);
    randomNumber.last = randomNum;
    return randomNum;
}