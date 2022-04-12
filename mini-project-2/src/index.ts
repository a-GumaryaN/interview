import { connect } from "mongoose";
import userModel from "./db/db.schema";
const log = console.log;

const newUser = new userModel({
    _id: 'id3',
    password: '123456',
    fullName: 'user_1',
    bDate: Date.now().toString()
});

connect("mongodb://localhost:27017/mydb")
    .then(async() => {
        log('connected to the database successfully');

        await newUser.save();

        log('data saved to database successfully');

    })
    .catch(error => log(error));