import './App.css'
import {StoreProvider,useStore} from './context/StoreContext'
import {BottomNav,SiteFooter,SiteHeader} from './components/Shared'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import ShopPage from './pages/ShopPage'
import AccountPage from './pages/AccountPage'
import OrdersPage from './pages/OrdersPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
function RoutedPages(){const {path}=useStore();let page;if(path==='/')page=<HomePage/>;else if(path==='/categories')page=<CategoriesPage/>;else if(path==='/shop')page=<ShopPage/>;else if(path.startsWith('/category/'))page=<ShopPage category={decodeURIComponent(path.split('/').pop()||'').replaceAll('-',' ')}/>;else if(path==='/account')page=<AccountPage/>;else if(path==='/orders')page=<OrdersPage/>;else if(path==='/wishlist')page=<WishlistPage/>;else if(path==='/cart')page=<CartPage/>;else if(path==='/contact')page=<ContactPage/>;else page=<main className="page-container"><h1>Page not found</h1></main>;return <div className="store-shell"><SiteHeader/>{page}<SiteFooter/><BottomNav/></div>}
export default function App(){return <StoreProvider><RoutedPages/></StoreProvider>}
