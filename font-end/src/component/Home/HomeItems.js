import React from "react";
import { Link } from "react-router-dom";
function HomeItems(props) {
  return (
    <div>
      <div id="body">
        <div className="banner">&nbsp;</div>
        <div id="content">
          <div className="content">
            <ul>
              <li>
                {" "}
                <Link to="#">
                  <img src="images/puppy.jpg" width={114} height={160} alt="" />
                </Link>
                <h2>What they need</h2>
                <p>
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  clara m, ant epo suerit li tterar.{" "}
                  <Link to={'/PetMart'} className="more" >
                    View all
                  </Link>
                </p>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <img src="images/cat.jpg" width={114} height={160} alt="" />
                </Link>
                <h2>Something good</h2>
                <p>
                  Gothica, quam nun c putamus parum claram, anteposuerit
                  litterarum formas humani tatis per seacula.{" "}
                  <Link to={'/PetMart'} className="more" >
                    View all
                  </Link>
                </p>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <img src="images/koi.jpg" width={114} height={160} alt="" />
                </Link>
                <h2>Kinds of Fish</h2>
                <p>
                  Quam nunc putamus parum claram, antep osuerit litter arum
                  formas humanitatis per seacula quarta.{" "}
                  <Link to={'/PetMart'} className="more" >
                    View all
                  </Link>
                </p>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <img src="images/bird.jpg" width={114} height={160} alt="" />
                </Link>
                <h2>Fun birds</h2>
                <p>
                  Mirum est notare quam littera gothica , quam nunc putamus
                  parum claram, anteposuerit.{" "}
                  <Link to={'/PetMart'} className="more" >
                    View all
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div id="sidebar">
            <div className="search">
              <form action="/search" method="GET">
                <input type="text" name="s" defaultValue="Find" />
                <button>&nbsp;</button>
              </form>
              <label htmlFor="articles">
                <input type="radio" id="articles" />
                Articles
              </label>
              <label htmlFor="products">
                <input type="radio" id="products" defaultChecked="" />
                PetMart Products
              </label>
            </div>
            <div className="section">
              <ul className="navigation">
                <li className="active">
                  <Link to="#">Shopping Guides</Link>
                </li>
                <li>
                  <Link to="#">Discounted Items</Link>
                </li>
              </ul>
              <div className="aside">
                <div>
                  <div>
                    <ul>
                      <li>
                        <Link to="#">Pet Accesories </Link>{" "}
                        <Link to={'/PetMart'} className="more" >
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Bath Essentials</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Food</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Vitamins</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Needs</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Toy and Treats</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Supplies</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pet Emergency Kit</Link>{" "}
                        <Link to="#">
                          see all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured">
          <ul>
            <li>

              <Link to="#">
                <img
                  src="images/organic-and-chemical-free.jpg"
                  width={300}
                  height={90}
                  alt=""
                />
              </Link>
            </li>
            <li>

              <Link to="#">
                <img
                  src="images/good-food.jpg"
                  width={300}
                  height={90}
                  alt=""
                />
              </Link>
            </li>
            <li className="last">

              <Link to="#">
                <img
                  src="images/pet-grooming.jpg"
                  width={300}
                  height={90}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeItems;
