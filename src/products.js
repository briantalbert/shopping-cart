import sixcookies from "./sixcookies.jpg";
import twelvecookies from "./twelvecookies.jpg";
import chocchips from "./chocchips.jpg";

const products = [
    {
        id: 1,
        prod_name: 'half dozen cookies',
        thc_total: `${6 * 30} mg THC`,
        price: 30.00,
        img: sixcookies
    },
    {
        id: 2,
        prod_name: 'one dozen cookies',
        thc_total: `${12 * 30} mg THC`,
        price: 50.00,
        img: twelvecookies
    },
    {
        id: 3,
        prod_name: 'add chocolate chips',
        thc_total: 'no THC content',
        price: 1.00,
        img: chocchips
    }
]

export default products;