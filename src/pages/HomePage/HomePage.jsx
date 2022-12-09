import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        grid={true}
        title={"User Analytics"}
        dataKey={"Active Users"}
      />
    </div>
  );
};

export default HomePage;
