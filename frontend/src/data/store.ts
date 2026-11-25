export type Category = 'Small Plants' | 'Indoor Plants' | 'Outdoor Plants' | 'Flowering Plants' | 'Seeds'
export type Product = { id:number; name:string; category:Category; price:number; image:string; description:string; badge?:string }
export type Cart = Record<number,number>
export const categories = [
 {name:'All Plants',image:'photo-1497250681960-ef046c08a56e',note:'A little green for every space'},
 {name:'Small Plants',image:'photo-1459411552884-841db9b3cc2a',note:'Small plants, big joy'},
 {name:'Indoor Plants',image:'photo-1501004318641-b39e6451bec6',note:'Bring the outdoors in'},
 {name:'Outdoor Plants',image:'photo-1416879595882-3373a0480b5b',note:'Make your garden greener'},
 {name:'Flowering Plants',image:'photo-1490750967868-88aa4486c946',note:'Colourful blooms to love'},
 {name:'Seeds',image:'photo-1470509037663-253afd7f0f51',note:'Start something beautiful'},
]
export const products:Product[] = [
 {id:1,name:'Monstera Deliciosa',category:'Indoor Plants',price:699,image:'photo-1501004318641-b39e6451bec6',description:'A tropical statement plant.',badge:'Bestseller'},
 {id:2,name:'Peace Lily',category:'Indoor Plants',price:449,image:'photo-1497250681960-ef046c08a56e',description:'Elegant, easy-care greenery.'},
 {id:3,name:'Rose Plant',category:'Flowering Plants',price:349,image:'photo-1494972308805-463bc619d34e',description:'Colourful blooms for your garden.',badge:'Popular'},
 {id:4,name:'Snake Plant',category:'Indoor Plants',price:399,image:'photo-1509423350716-97f9360b4e09',description:'Sculptural leaves for your home.'},
 {id:5,name:'Garden Flower Mix',category:'Flowering Plants',price:299,image:'photo-1490750967868-88aa4486c946',description:'A cheerful mix of garden flowers.'},
 {id:6,name:'Areca Palm',category:'Outdoor Plants',price:899,image:'photo-1518531933037-91b2f5f229cc',description:'Lush greenery for open spaces.'},
 {id:7,name:'Mini Succulent',category:'Small Plants',price:199,image:'photo-1459411552884-841db9b3cc2a',description:'A little green desk companion.',badge:'Under ₹200'},
 {id:8,name:'Jade Plant',category:'Small Plants',price:249,image:'photo-1509423350716-97f9360b4e09',description:'A charming, compact succulent.'},
 {id:9,name:'Sunflower Seeds',category:'Seeds',price:99,image:'photo-1470509037663-253afd7f0f51',description:'Grow bright sunflowers at home.'},
 {id:10,name:'Basil Seeds',category:'Seeds',price:79,image:'photo-1501004318641-b39e6451bec6',description:'Fresh herbs for pots and planters.'},
 {id:11,name:'Marigold Seeds',category:'Seeds',price:69,image:'photo-1490750967868-88aa4486c946',description:'Easy-to-grow colourful flowers.'},
 {id:12,name:'Hibiscus Plant',category:'Flowering Plants',price:399,image:'photo-1494972308805-463bc619d34e',description:'Tropical flowers with vibrant colour.'},
]
export const money=(v:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(v)
export const imageUrl=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=850&q=85`
export const categoryPath=(name:string)=>`/category/${encodeURIComponent(name.toLowerCase().replaceAll(' ','-'))}`
