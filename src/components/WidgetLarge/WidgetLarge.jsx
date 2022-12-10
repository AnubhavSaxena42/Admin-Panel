import React from "react";
import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widget-large-btn " + type}>{type}</button>;
  };
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest Transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-tr">
          <th className="widget-large-th">Customer</th>
          <th className="widget-large-th">Date</th>
          <th className="widget-large-th">Amount</th>
          <th className="widget-large-th">Status</th>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt="user-img"
              className="widget-large-image"
            />
            <span className="widget-large-name">Ren Chon</span>
          </td>
          <td className="widget-large-date">2nd Jun 2021</td>

          <td className="widget-large-amount">$43</td>

          <td className="widget-large-status">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt="user-img"
              className="widget-large-image"
            />
            <span className="widget-large-name">Ren Chon</span>
          </td>
          <td className="widget-large-date">2nd Jun 2021</td>

          <td className="widget-large-amount">$43</td>

          <td className="widget-large-status">
            <Button type={"Declined"} />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt="user-img"
              className="widget-large-image"
            />
            <span className="widget-large-name">Ren Chon</span>
          </td>
          <td className="widget-large-date">2nd Jun 2021</td>

          <td className="widget-large-amount">$43</td>

          <td className="widget-large-status">
            <Button type={"Pending"} />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt="user-img"
              className="widget-large-image"
            />
            <span className="widget-large-name">Ren Chon</span>
          </td>
          <td className="widget-large-date">2nd Jun 2021</td>

          <td className="widget-large-amount">$43</td>

          <td className="widget-large-status">
            <Button type={"Approved"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
