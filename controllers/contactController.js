//@desc Get all contacts
//@route GET /
//@access public
const getAllContact = (req, res) => {
    res.status(200).json({ massage: 'get all contacts' })
}

//@desc Create new contacts
//@route POST /
//@access public
const createContact = (req, res) => {
    res.status(201).json({ massage: 'created Contact'})
}

//@desc get contacts
//@route GET /:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ massage: `get contatct for id ${req.params.id}` })
}

//@desc Create new contacts
//@route PUT /:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ massage: `Update contact ${req.params.id}` })
}

//@desc Create new contacts
//@route DELETE /:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ massage: `contact to delete ${req.params.id}` })
  }


module.exports = {getAllContact, createContact, getContact, updateContact, deleteContact}