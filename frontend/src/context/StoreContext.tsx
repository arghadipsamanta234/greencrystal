import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from 'react'
import {products,type Cart} from '../data/store'
const read=<T,>(key:string,fallback:T):T=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v) as T:fallback}catch{return fallback}}
type Store={path:string;navigate:(to:string)=>void;search:string;setSearch:(v:string)=>void;cart:Cart;cartCount:number;cartTotal:number;wishlist:number[];addToCart:(id:number)=>void;updateQty:(id:number,qty:number)=>void;toggleWishlist:(id:number)=>void;orderId:string;setOrderId:(v:string)=>void;orderNotice:string;setOrderNotice:(v:string)=>void}
const StoreContext=createContext<Store|null>(null)
export function StoreProvider({children}:{children:ReactNode}){
 const [path,setPath]=useState(location.pathname),[search,setSearch]=useState(''),[cart,setCart]=useState<Cart>(()=>read('gc-cart',{})),[wishlist,setWishlist]=useState<number[]>(()=>read('gc-wishlist',[])),[orderId,setOrderId]=useState(''),[orderNotice,setOrderNotice]=useState('')
 useEffect(()=>{const pop=()=>setPath(location.pathname);addEventListener('popstate',pop);return()=>removeEventListener('popstate',pop)},[])
 useEffect(()=>{localStorage.setItem('gc-cart',JSON.stringify(cart))},[cart]);useEffect(()=>{localStorage.setItem('gc-wishlist',JSON.stringify(wishlist))},[wishlist])
 const navigate=(to:string)=>{if(to!==location.pathname)history.pushState({},'',to);setPath(to);scrollTo({top:0,behavior:'smooth'})}
 const addToCart=(id:number)=>setCart(c=>({...c,[id]:(c[id]||0)+1}))
 const updateQty=(id:number,qty:number)=>setCart(c=>{const n={...c};if(qty<=0)delete n[id];else n[id]=qty;return n})
 const toggleWishlist=(id:number)=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])
 const cartCount=Object.values(cart).reduce((a,b)=>a+b,0)
 const cartTotal=useMemo(()=>products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0),[cart])
 return <StoreContext.Provider value={{path,navigate,search,setSearch,cart,cartCount,cartTotal,wishlist,addToCart,updateQty,toggleWishlist,orderId,setOrderId,orderNotice,setOrderNotice}}>{children}</StoreContext.Provider>
}
export const useStore=()=>{const value=useContext(StoreContext);if(!value)throw new Error('useStore must be used inside StoreProvider');return value}
