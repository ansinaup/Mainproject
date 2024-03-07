function CardProduct({img,name,para}) {
    
  return (
    <>
    <div className="px-6 py-5 border-4 rounded-lg shadow-md mt-5 mb-5 w-60 hover:scale-105">
        <div className="">
            <img className="w-32 " src={img} alt="" />
        </div>
        <div className=" items-center">
            <h2 className="text-xl font-mono font-bold">{name}</h2>
            <p className=" font-bold text-lg">{para}</p>
            <div className="text-center">
                <button className="bg-green-600 py-2 w-full text-white rounded-lg text-lg">Add To Cart</button>
            </div>
        </div>
    </div>


    {/* <div className="container">
  <div className="overlay">
    <div className = "items"></div>
    <div className = "items head">
      <p>Flower Embroidery Hoop Art</p>
      <hr>
    </div>
    <div className = "items price">
      <p className="old">$699</p>
      <p className="new">$345</p>
    </div>
    <div className="items cart">
      <i className="fa fa-shopping-cart"></i>
      <span>ADD TO CART</span>
  </div>
</div>
</div> */}

   </>
  )
}

export default CardProduct
