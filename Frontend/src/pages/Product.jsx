import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item);
        
        return null;
      }
    })}

    useEffect(()=>{
      fetchProductData();      
    },[productId])
  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index)=>(
              <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shink-0 cursor-pointer' alt="" onClick={()=>setImage(item)} />

            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* product information */}
        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index)=>(
                <button key={index} className={`border bg-gray-100 py-2 px-4 hover:cursor-pointer ${item===size? 'border-orange-500':''}`} onClick={()=>setSize(item)}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:cursor-pointer' onClick={()=>addToCart(productData._id, size)}>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>An E-commerce website is an online platform that facilitates buying and selling</p>
          <p>An E-commerce website is an online platform that facilitates buying and selling...</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'>

  </div>
}

export default Product
