import mongoose, { connect } from "mongoose";

async function conectaDB() {
    mongoose.connect('mongodb+srv://andrewclarck_db_user:ZZgXQPmu0YUDV7xG@biblioteca.curppnz.mongodb.net/biblioteca?appName=Biblioteca')
    
    return mongoose.connection
}

export default conectaDB