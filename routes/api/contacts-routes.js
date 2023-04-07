const express = require('express');

const ctrl = require("../../controllers/contacts-controllers")

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");


const router = express.Router()



router.get('/', ctrl.getAllContacts)

router.get('/:id', ctrl.getOneContactById)

router.post('/', validateBody(schemas.addSchema), ctrl.addContactById)

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateContactById)

router.patch('/:id/favorite', validateBody(schemas.updateFavoriteSchema), ctrl.setFavorite)

router.delete('/:id', ctrl.deleteContactById)

module.exports = router