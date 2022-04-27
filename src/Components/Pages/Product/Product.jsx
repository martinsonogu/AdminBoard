import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../Charts/Chart';
import "./Product.css";
import { productData } from '../../../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newProduct" >
          <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performanace" />
          </div>
          <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6bnk3QlRSbEwuX0FDX1NMMTUwMF8uanBn.jpg" 
                    alt="" 
                    className='productInfoImg' />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">4543</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>

                </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder='Apple Airpod'/>
                  <label>In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6bnk3QlRSbEwuX0FDX1NMMTUwMF8uanBn.jpg" 
                      alt="" 
                      className='productUploadImg' />
                      <label htmlFor="file"><Publish/></label>
                      <input type="file" id='file' style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>

      </div>
    </div>
  )
}

export default Product
