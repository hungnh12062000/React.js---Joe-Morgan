import React from "react";
import Alert from "../Alert/Alert";
import "./CartSuccess.css";

export default function CartSuccess() {
     return (
          <div className="cart-success">
               <Alert message={"Added Items success!"} type={"success"}>
                    <div className="cart-success-wrapper">
                         <h2>
                              You have added 3 items:
                         </h2>
                         <div className="item">
                              <div>Bananas</div>
                              <div>Quantity: 2</div>
                         </div>
                         <div className="item">
                              <div>Lettuce</div>
                              <div>Quantity: 1</div>
                         </div>
                    </div>
               </Alert>
          </div>
     );
}