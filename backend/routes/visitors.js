
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  idType: String,
  idNumber: String,
  purpose: String,
  visitorImage: Buffer,
  visitorImageType: String,
  securityId: String
});

const Visitor = mongoose.model('Visitor', visitorSchema);

router.post('/visitors', upload.single('visitorImage'), async (req, res) => {
  try {
    const { name, email, contact, idType, idNumber, purpose, securityId } = req.body;

    const visitor = new Visitor({
      name,
      email,
      contact,
      idType,
      idNumber,
      purpose,
      securityId,
      visitorImage: req.file ? req.file.buffer : undefined,
      visitorImageType: req.file ? req.file.mimetype : undefined
    });

    await visitor.save();
    res.status(201).json({ message: 'Visitor registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
});

module.exports = router;
