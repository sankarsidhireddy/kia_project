const express=require('express')
const {PythonShell} =require('python-shell');
const app=express()

app.get("/", (req, res, next)=>{
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
          scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
        args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    };
     
 
    PythonShell.run('python_test.py', options, function (err, result){
          if (err) throw err;
          console.log('result: ', result.toString());
          res.send(result.toString())
    });
});




app.listen(5000,()=>{
    console.log('connected to port')
})