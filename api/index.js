import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    try{
        console.log(`Listening to the port:${PORT}`);
        
    }catch{
        console.log('Error in app listen');   
    }
})
