import { Publish } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { ProductData } from "../../dummyData";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/create-product">
          <button className="product-create-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart
            title={"Sales Performance"}
            data={ProductData}
            dataKey={"Sales"}
            grid
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt=""
              className="product-info-img"
            />
            <span className="product-info-name">Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">4123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">active:</span>
              <span className="product-info-value">yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Airpods" />
            <label>In Stock</label>
            <select name="in-stock" id="in-stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
                alt=""
                className="product-upload-image"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-update-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
