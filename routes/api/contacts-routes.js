const express = require('express');

const ctrl = require("../../controllers/contacts-controllers")

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const { authenticate, isValidId } = require("../../middlewares");


const router = express.Router()



router.get('/', ctrl.getAllContacts)

router.get('/:id', authenticate, isValidId, ctrl.getOneContactById)

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addContactById)

router.put('/:id', authenticate, validateBody(schemas.addSchema), ctrl.updateContactById)

// router.patch('/:id/favorite', authenticate,  validateBody(schemas.updateFavoriteSchema), ctrl.setFavorite)

router.delete('/:id', authenticate, ctrl.deleteContactById)

module.exports = router