import sixcookies from "./sixcookies.jpg";
import twelvecookies from "./twelvecookies.jpg";
import chocchips from "./chocchips.jpg";
import oil from "./coconutoil.jpg"

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
    },
    {
        id: 4,
        prod_name: '1 cup infused coconut oil',
        thc_total: '~1200 mg THC',
        price: 150.00,
        img: oil
    }
]

export default products;