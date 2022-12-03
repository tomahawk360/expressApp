var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    timestamp : { type : String, required : true },
    ws : { type : Number, default : -1 },
    wd : { type : Number, default : -1 },
    temp : { type : Number, default : -1 },
    rh : { type : Number, default : -1 },
    bp : { type : Number, default : -1 }
},{
    collection : 'datas'
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;