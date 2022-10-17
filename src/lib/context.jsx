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
  const [totalQuantities, setTotalQuantities] = useState();
  const [totalPrice, setTotalPrice] = useState();

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

  const onAdd = (item, quantity) => {
   
  } 

  const onRemove = (product) => {

  }

  const toggleCartItemQuanitity = (id, value) => {
    
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