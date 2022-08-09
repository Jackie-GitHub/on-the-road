import axios from 'axios';
import keys from './keys';
 
export default axios.create({
    baseURL:'https://api.weatherbit.io/v2.0/current',
    params:{
        key:keys.weatherBit,
        units:'I'
    }
});