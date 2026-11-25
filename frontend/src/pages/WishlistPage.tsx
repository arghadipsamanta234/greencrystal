import {products} from '../data/store'
import {useStore} from '../context/StoreContext'
import {EmptyState,PageFrame,PageHeading,ProductGrid} from '../components/Shared'
export default function WishlistPage(){const {wishlist,navigate}=useStore();return <PageFrame><PageHeading eyebrow="SAVED FOR LATER" title="My Wishlist" note={`${wishlist.length} saved ${wishlist.length===1?'product':'products'}.`}/>{wishlist.length?<ProductGrid items={products.filter(p=>wishlist.includes(p.id))}/>:<EmptyState text="Your wishlist is waiting for a little green." action="Explore products" onAction={()=>navigate('/shop')}/>}</PageFrame>}
