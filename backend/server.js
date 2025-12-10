
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const visitorRoutes = require('./routes/visitors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/smart_vms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' Connected to MongoDB'))
.catch(err => console.error(' MongoDB Connection Error:', err));


app.use('/api', visitorRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
