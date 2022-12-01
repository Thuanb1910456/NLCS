import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div>
      <div id="footer">
        <div className="section">
          <ul>
            <li>
              {" "}
              <img
                src="images/friendly-pets.jpg"
                width={240}
                height={186}
                alt=""
              />
              <h2>
                <Link to="#">riendly Pets</Link>F
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
                diam nonummy nib.{" "}
                <Link to={"#"}>
                  Read More
                </Link>{" "}
              </p>
            </li>
            <li>
              {" "}
              <img
                src="images/pet-lover2.jpg"
                width={240}
                height={186}
                alt=""
              />
              <h2>
                <Link to="#">How dangerous are they</Link>
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed diam
                euis.{" "}
                <Link to={"#"}>
                  Read More
                </Link>{" "}
              </p>
            </li>
            <li>
              {" "}
              <img
                src="images/healthy-dog.jpg"
                width={240}
                height={186}
                alt=""
              />
              <h2>
                <Link to="#">Keep them healthy</Link>
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
                diam nonu mmy.{" "}
                <Link to={"#"}>
                  Read More
                </Link>{" "}
              </p>
            </li>
            <li>
              <h2>
                <Link to="#">Love...love...love...pets</Link>
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
                diameusim.{" "}
                <Link to={"#"}>
                  Read More
                </Link>{" "}
              </p>
              <img src="images/pet-lover.jpg" width={240} height={186} alt="" />{" "}
            </li>
          </ul>
        </div>
        <div id="footnote">
          <div className="section">
            Copyright © 2022 <Link to="/">Thuanb1910456@student.ctu.edu.vn</Link> |All rights reserved |
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
