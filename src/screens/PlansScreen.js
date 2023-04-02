import React from "react";
import "./PlansScreen.css";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { QuerySnapshot } from "firebase/firestore";

const PlansScreen = () => {
  return (
    <div className="plansScreen">
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h4>NetFlix Basic</h4>
          <h3>720p</h3>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h4>NetFlix Standard</h4>
          <h3>1080p</h3>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h4>NetFlix Premium</h4>
          <h3>4K+HDR</h3>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default PlansScreen;
