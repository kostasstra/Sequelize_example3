const express =require('express')

const {sequelize, User, Post,Areas,Regions,Sports,Sports_Centers,Sequelize} = require('./models')
const user = require('./models/user')
const areas = require('./models/areas')
const Op = Sequelize.Op
//const user = require('./models/user')
const app = express()
app.use(express.json())



// use the express-static middleware
app.use(express.static("public"))

//Api Create User and insert the DataBase
app.post('/users', async(req, res) => {
    const {name, email, role} = req.body
    try
    {
        const user =await User.create({name, email, role})        
         return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
//API Search all the users
app.get('/users', async (req, res) =>{
   try
    {
        const users = await User.findAll()
         return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Somenthing went wrong!'})
    }
})
//Api for Search a user
app.get('/users/:uuid', async (req, res) =>{
      
    const uuid =req.params.uuid 
    try
     {
         const users = await User.findOne({
             where:{uuid},
             include: 'posts',

         })
          return res.json(users)
     }catch(err){
         console.log(err)
         return res.status(500).json({error:'Somenthing went wrong!'})
     }
 })


 app.post('/posts', async(req, res) => {
     
    const { userUuid, body} = req.body

    try{
       const user = await User.findOne({ where: { uuid: userUuid }})
       const post = await Post.create({body, userId:user.id})

       return res.json(post)

     }catch (err){
         console.log(err)
         return res.status(500).json(err)
     }
 })


 app.get('/posts', async(req, res) => {
     
    

    try{
      const posts = await Post.findAll({include: 'user'}) 
         
       return res.json(posts)

     }catch (err){
         console.log(err)
         return res.status(500).json(err)
     }
 })


 //Api for delete a user
app.delete('/users/:uuid', async (req, res) =>{
      
    const uuid =req.params.uuid 
    try
     {
         const user = await User.findOne({where:{uuid}})

         await user.destroy()

          return res.json(user)
     }catch(err){
         console.log(err)
         return res.status(500).json({error:'Somenthing went wrong!'})
     }
 })



 //Api for update a user
 app.put('/users/:uuid', async (req, res) =>{
      
    const uuid =req.params.uuid 
    const { name, email, role } =req.body
    try
     {
         const user = await User.findOne({where:{uuid}})
           
         user.name = name
         user.email = email
         user.role = role
          
         await user.save()
         
          return res.json(user)
     }catch(err){
         console.log(err)
         return res.status(500).json({error:'Somenthing went wrong!'})
     }
 })

//Api Create User and insert the DataBase
app.post('/area', async(req, res) => {
    const {area_name,regionId} = req.body
    console.log(area_name)
    try
    {
        const areas =await Areas.create({area_name:area_name,regionId:regionId})        
         return res.json(areas)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})



app.post('/region', async(req, res) => {
     
    const {region_name} = req.body
    try{       
       const regionsa = await Regions.create({region_name:region_name})
       return res.json(regionsa)
     }catch (err){
         console.log(err)
         return res.status(500).json(err)
     }
 })


 app.get('/getFromRegions', async(req, res) => {     
    const {region_name} = req.body
    try{
        //const areas = await Regions.findOne({ where: { region_name:region_name }}).then(r => {
        //  Areas.findAll({ where: { regionId:r }})
       // })
       //const areas = await Areas.findAll({ where: { regionId:regionid }})
       const areas = await Areas.findAll({        
           attributes:["area_name"],
           
              include: {
               model: Regions,
              // as: 'Instruments.region_name',
               required:true,
                where: { region_name:{[Op.eq]: region_name} },
                 attributes: ['region_name'],
                   trough:{
                    attributes:[]
                }
            },        
        })
              return res.json(areas)
        }catch (err){
             console.log(err)
              return res.status(500).json(err)
     }
 })


 app.post('/sports', async(req, res) => {
     
    const {sport_name} = req.body
    try{       
       const sports = await Sports.create({sport_name:sport_name})
       return res.json(sports)
     }catch (err){
         console.log(err)
         return res.status(500).json(err)
     }
 })


 app.post('/sports_centers', async(req, res) => {
     
    const {areasId,sport_center_name,address,postal_code,phone_number} = req.body
    try{       
       const sports_centers = await Sports_Centers.create({areasId:areasId,sport_center_name:sport_center_name,address:address,postal_code:postal_code,phone_number:phone_number})
       return res.json(sports_centers)
     }catch (err){
         console.log(err)
         return res.status(500).json(err)
     }
 })

 app.get('/getFrom_sports_centers', async(req, res) => {     
    const {sport_center_name} = req.body
    try{
        //const areas = await Regions.findOne({ where: { region_name:region_name }}).then(r => {
        //  Areas.findAll({ where: { regionId:r }})
       // })
       //const areas = await Areas.findAll({ where: { regionId:regionid }})
       const sportscenters = await Areas.findAll({        
           attributes:["area_name"],
           
              include: {
               model: Sports_Centers,
              // as: 'Instruments.region_name',
               required:true,
                where: { sport_center_name:{[Op.eq]: sport_center_name} 
            },
                
        }
       })      
                return res.json(sportscenters)
            }catch (err){
                 console.log(err)
                  return res.status(500).json(err)
         }
     })

app.listen({ port:5000}, async () => {
    console.log('Server up on http://localhost:5000')

    await sequelize.authenticate()
    console.log('Database connected!')
})
