const { MongoClient } = require("mongodb");

//lop tro giup ket noi den mongodb
class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;