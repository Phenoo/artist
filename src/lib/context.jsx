import React, {useEffect, useState, createContext, useContext} from 'react'
import toast from 'react-hot-toast';
import {client} from '../lib/client'


const ArtContext = createContext();

export function useArtContext() {
  return useContext(ArtContext)
}

export function ArtProvider({children}){
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState()
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectSize, setSelectSize] = useState()
  const [selectType, setSelectType] = useState()
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  let foundProduct;
  let index;

  
  const scrollTo = () => {
    let element = document.getElementById('nav');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setPosts(post);
    setFilterWork(post);
    let allCategories = ['All', ...new Set(post.map((item) => item.category))];
    setCategories(allCategories)
  }

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
      if (item === 'All') {
        setFilterWork(posts);
      } else {
        setFilterWork(posts.filter((work) => work.category.includes(item)));
      }
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`1 ${product.name} added to the cart.`);
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const value = {
    scrollTo,
    handleWorkFilter,
    filterWork,
    categories,
    activeFilter,
    selectType,
    setSelectType,
    selectSize,
    setSelectSize,
    totalQuantities, 
    setTotalQuantities,
    cartItems,
    setCartItems,
    showCart,
    setShowCart,    
    onAdd,
    totalPrice,
    toggleCartItemQuanitity,
    onRemove,
    qty,
    setQty
  }

  return (
    <ArtContext.Provider value={value}>
      {children}
    </ArtContext.Provider>
  )
}