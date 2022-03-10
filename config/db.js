const mongoos = require("mongoose");
const config = require("config");
const db_uri = config.get("MongoURI");

const connectDB = async() => {
    try {
        await mongoos.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected");
    } catch (err) {
        console.error(err.message);
        console.log(err);
        console.log("Database Error");
        process.exit(1);
    }
};

module.exports = connectDB;