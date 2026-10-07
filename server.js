let express = require('express');
let dotenv = require('dotenv');
dotenv.config();
let cors = require('cors');
let app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/aunthentication.route');


let port = process.env.PORT || 4000;


let connection = mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true
}));


app.use(authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});