const { ctrlWrapper } = require("../utils");

const { Contact } = require("../models/contact");

const { HttpError } = require("../helpers");


const getAllContacts = async (req, res) => {
    const result = await Contact.find({});
    res.json(result);
  
}

const getOneContactById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404, error.message);
    }
    res.json(result);
  
}

const addContactById = async (req, res) => {
      
        const result = await Contact.create(req.body);
        res.status(201).json(result);
  
}

const deleteContactById =async (req, res) => {
        const {id} = req.params;
        const result = await Contact.findByIdAndDelete(id);
        if(!result) {
            throw HttpError(404, error.message);
        }
        res.status(200).json({ message: "contact deleted" });
    
}

const updateContactById = async (req, res) => {
        const {id} = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
        if(!result) {
            throw HttpError(404, error.message);
        }
        res.json(result);
        
}

const setFavorite = async (req, res) => {
        const {id} = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
        if(!result) {
            throw HttpError(404, error.message);
        }
        res.json(result);
	
}

module.exports = {
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContactById: ctrlWrapper(getOneContactById),
    addContactById: ctrlWrapper(addContactById),
    deleteContactById: ctrlWrapper(deleteContactById),
    updateContactById: ctrlWrapper(updateContactById),
    setFavorite: ctrlWrapper(setFavorite),
}