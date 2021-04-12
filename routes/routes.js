const express = require('express')
const axios = require('axios')
const router = express.Router()

const REPORTS_API_URL = 'https://api.covid19tracker.ca/reports'

router.get('/canada', async(req, res, next) => {
    
    try {
        
        const { data } = await axios.get(`${REPORTS_API_URL}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }
   
})

const PROVINCE_REPORTS_API_URL = 'https://api.covid19tracker.ca/reports/province/'

router.get('/provinces', async(req, res, next) => {
    
    try {
        const params = req.query.name
        const { data } =  await axios.get(`${PROVINCE_REPORTS_API_URL}${params}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }  
})


module.exports = router