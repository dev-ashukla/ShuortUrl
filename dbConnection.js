const mongoose = require("mongoose")
async function connectToDb(){
await mongoose.connect(process.env.CONN_STR, {useNewUrlParser : true})
.then(()=>{
    console.log("DB connected successfully...")
})
.catch((err)=>{
    console.log(err)
console.log("DB not connected!!")
})
}

module.exports = connectToDb