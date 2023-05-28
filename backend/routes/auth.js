const express = require('express');

const router = express.Router()

router.get('/', (req, res)=>{

let obj = {

    name: "mahendra",
    email: "mahendrayadav7571@gmail.com"
}
res.json(obj);

})

module.exports = router