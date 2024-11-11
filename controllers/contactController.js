const asyncHandler = require("express-async-handler")
const connection  = require("../db")
const formatPhoneNumber = require("../utils/format")
const findUserById = require("../utils/userUtils")


//@desc Get all contacts
//@route GET /
//@access public
const getAllContact = asyncHandler( async (req, res) => {
    const query = "select * from users;"
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuários:', err.message);
            return res.status(500).send('Erro ao buscar usuários');
        }
        res.status(200).json(results);
    });
})

//@desc Create new contacts
//@route POST /
//@access public
const createContact = asyncHandler( async (req, res) => {
    let {name, email, phone} = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    try {
        phone = formatPhoneNumber(phone);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    const query = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)"
    connection.query(query, [name, email, phone], (err, result) => {
        if (err) {
            console.error("Error inserting user", err.message)
            return res.status(500).send("Error to insert user")
        }
        res.status(201).json({ message: 'created Contact'})
    })
})

//@desc get contacts
//@route GET /:id
//@access public
const getContact = asyncHandler( async (req, res) => {
    const userId = req.params.id
    console.log(userId)
    try {
        const user = await findUserById(userId)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.massage)
    }
})

//@desc Create new contacts
//@route PUT /:id
//@access public
const updateContact = asyncHandler( async (req, res) => {
    const userId = req.params.id
    console.log(userId)
    try {
        const user = await findUserById(userId)
        //logica do update
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.massage)
    }
})

//@desc Create new contacts
//@route DELETE /:id
//@access public
const deleteContact = asyncHandler( async (req, res) => {
    const userId = req.params.id
    console.log(userId)
    try {
        const user = await findUserById(userId)
        //logica do delete
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.massage)
    }
})

module.exports = {getAllContact, createContact, getContact, updateContact, deleteContact}