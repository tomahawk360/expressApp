var dataModel = require("../models/data");

exports.data_create = async (data) => {
    const arr = data.split("\n");
    const len = arr.length;

    for(let i = 0; i < len-1; i++) {
        const model = new dataModel(JSON.parse(arr[i]));

        try{
            await model.save();
        } catch (error) {
            return error;
        }
    }

    console.log("Upload done successfully");
}