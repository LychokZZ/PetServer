const User = require('./User')
const Stan = require('./Stan')
const Product =require('./Product')
const Lock = require('./Lock')
class authController{ 

    async registation(req, res){
        try{
            const {username , password} = req.body
            console.log(username , password)
            const candidat = await User.findOne({username})
            if(candidat){
                return res.status(400).json({message: "Імя зайняте"})
            }
            const user = new User({username, password})
            await user.save() 
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Registration error"})
        }
    }
    async login(req, res){
        try{
            const {username , password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Користувача ${username} не найдено!`})
            }
            const passwordValid = await User.findOne({password})
            if(!passwordValid){
                return res.status(400).json({message: 'Парольне не правильний'})
            }
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }

    async Stan(req, res){
        try{
            const { username, Eat, Sleep, Play, Health,LVL } = req.body;
            const updatedUser = await Stan.findOneAndUpdate(
              { username }, 
              { $set: { Eat, Sleep, Play, Health ,LVL } }, 
              { new: true, upsert: true } 
            );
        
            res.json(updatedUser);
        }catch(e){
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }
    async getStan(req,res){
        try{
            const {username} = req.query;
            const Stans = await Stan.findOne({username})
            res.json(Stans);
        }catch(e){
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }
    async product(req,res){
        try{
            const { username, Rice, Fish, Seaweed, Meat, Milk,Salad,Pill,Inject, Balance} = req.body;
            const updatedProduct = await Product.findOneAndUpdate(
              { username }, 
              { $set: {  Rice, Fish, Seaweed, Meat, Milk,Salad,Pill,Inject,Balance } }, 
              { new: true, upsert: true } 
            );
        
            res.json(updatedProduct);
        }catch(e){
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }
    async getProduct(req,res){
        try{
            const {username} = req.query;
            const Products = await Product.findOne({username})
            res.json(Products);
        }catch(e){
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }

    async setLock(req,res){
        try {
            const { username, Japan, City, Train} = req.body;
            console.log(username, Japan, City, Train)
            const updatedProducts = await Lock.findOneAndUpdate(
                { username }, 
                { $set: { Japan, City, Train } }, 
                { new: true, upsert: true } 
              );
            res.json(updatedProducts);
        } catch (error) {
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }
    async getLock(req,res){
        try {
            const {username} = req.query;
            const lock = await Lock.findOne({username})
            console.log(lock)
        } catch (error) {
            console.log(e)
            res.status(400).json({message: " Error post Stan"})
        }
    }
}

module.exports = new authController()