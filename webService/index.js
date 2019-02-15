const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json()); // read tht json from tht jason


courses=[
{id:1,name:'english'},
{id:2,name:'Maths'},
{id:3,name:'Science'}

];

app.get('/',(req,res)=>{

res.send('hello world');

});

app.get('/api/courses',(req,res)=>{

    res.send([1,2,3,4]);
});

app.get('/api/courses/:id',(req,res)=>{

  //res.send(req.params.id);

 let course= courses.find(c=>c.id === parseInt(req.params.id));
if(!course) res.status(404).send('The given id was not found');
res.send(course);

});

app.get('/api/courses/:year/:month',(req,res)=>{
res.send(req.params); 

})


app.post('/api/courses',(req,res)=>{
const schema={
name: joi.string().min(3).required()
}
const result=joi.validate(req.body,schema);
if(result.error){
 res.status(400).send('name is required  and should be threr');
return;

}


// if(!req.body.name || req.body.name < 3 ){
// // 400 bad request

// res.status(400).send('name is required  and should be threr');
// }


    const course ={
        id:courses.length +1,
        name: req.body.name

    };
courses.push(course);
res.send(course);
})


const port = process.env.PORT || 3000;


app.listen(port,()=>{

console.log('lstening on 3000');

});
