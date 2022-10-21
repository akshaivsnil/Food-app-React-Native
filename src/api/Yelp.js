import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer zZUUMXLkhgwEi5jx2TM2KgIb2He_N8n2lC8q5b6qQmwdx35BdZOzm-wWewYX8tA_Taes5WwOyTjm2bpc6x3hVBr47PhCEJQDyIaj4vxUJAy00_YoBWS_wAifSl9NY3Yx'
    }
   
});