import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
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
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default HomePage;
