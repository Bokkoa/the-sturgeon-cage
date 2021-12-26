
import axios from 'axios'

const fishApi = axios.create({
    // baseURL: 'https://www.fishwatch.gov/api',
    baseURL: ''
})

export default fishApi