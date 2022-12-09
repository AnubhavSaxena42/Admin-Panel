import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$55</span>
          <span className="money-rate">
            -11
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <div className="featured-sub">Compared to last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$55</span>
          <span className="money-rate">
            -12
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <div className="featured-sub">Compared to last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$5325</span>
          <span className="money-rate">
            +1
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <div className="featured-sub">Compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
