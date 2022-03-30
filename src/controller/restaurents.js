const Restaurent = require('../models/restaurents')
const mongoose = require("mongoose");
const { resSuccess, resError, resValidation } = require('../common/reponse');

exports.restaurentNames = async (req, res) => {
    try {
        const restaurents = await Restaurent.find();
        return res.status(200).json(resSuccess(' Restaurent Fetch succesfully', { data: restaurents }, res.statusCode));
    } catch (error) {
        console.log(error);
    }
}

exports.addRestaurentNames = async (req, res) => {
    {
        const { name, address, time, menu, category } = req.body;
        console.log(req.body);
        var newRestaurant = await Restaurent({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            address: address,
            time: time,
            menu: menu,
            category: category
        })
    }
    try {
        await newRestaurant.save();
        return res.status(200).json(resSuccess('New Restaurent Added succesfully', { data: newRestaurant }, res.statusCode));
    } catch (error) {
        console.log(error);
        return res.status(500).json(resError('Failed to add New Restaurent', error.stack, res.statusCode));
    }
}

exports.updateRestaurentName = async (req, res) => {
    try {
        const updateBody = req.body;
        let updateRestaurentBody = await Restaurent.updateOne({ _id: req.params.id }, updateBody)
        // updateRestaurentBody = updateBody
        // const updateRestaurent = await updateRestaurentBody.save();
        return res.status(200).json(resSuccess('Restaurent Data Updateded succesfully', { data: { ...updateRestaurentBody, ...updateBody } }, res.statusCode));
    } catch (error) {
        console.log(error);
        return res.status(500).json(resError('Failed to Update Restaurent', error.stack, res.statusCode));
    }
}

exports.deleteRestaurentName = async (req, res) => {
    try {
        const id = req.params.id

        let deleteRestaurent = await Restaurent.deleteOne({ _id: id })
        // updateRestaurentBody = updateBody
        // const updateRestaurent = await updateRestaurentBody.save();
        return res.status(200).json(resSuccess('Restaurent Data Deleted succesfully', { data: { ...deleteRestaurent } }, res.statusCode));
    } catch (error) {
        console.log(error);
        return res.status(500).json(resError('Failed to Delete Restaurent Data', error.stack, res.statusCode));
    }
}
