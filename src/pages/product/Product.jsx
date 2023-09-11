import { Publish } from "@mui/icons-material";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import "./product.scss";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={'/newProduct'}>
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey={"sales"}
            title={"Sales Performance"}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/assets/images/product.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">211</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5293</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="Product Name">Product Name</label>
            <input type="text" placeholder="Apple Air Pods" />
            <label htmlFor="stock">In Stock</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="/assets/images/product.jpg"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="publish">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="publish"
                style={{ display: "none" }}
              />
            </div>
            <button className="productBtnUpdate">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
