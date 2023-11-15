const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    //use mongodb
db: {
 // uri: process.env.MONGODB_URI || "mongodb+srv://b2012105:IOvstvC9UwFRAEpP@cluster0-ptweb.xsmedc0.mongodb.net/?retryWrites=true&w=majority"
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook"
}
}



module.exports = config;