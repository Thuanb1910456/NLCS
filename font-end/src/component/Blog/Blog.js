import React from "react";
import { Link } from "react-router-dom";
function Blog(props) {
  return (
    <div>
      <div id="body">
        <div id="content">
          <div className="content">
            <ul className="articles">
              <li>
                <div>
                  {" "}
                  <span>Dec 3</span>
                  <h2>What are the benefits of eating grass?</h2>
                  <Link className="heart" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="twitter" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="facebook" to="#">
                    &nbsp;
                  </Link>{" "}
                </div>
                <p>
                  {" "}
                  Điều này cho thấy gần như tất cả mèo đều ăn cỏ - và thường có
                  biểu hiện khỏe mạnh khi làm như vậy. Một lời giải thích được
                  nhiều người tin tưởng (nhưng không hoàn toàn chính xác 100%)
                  cho lý do tại sao mèo ăn cỏ là nó giúp chúng nôn ra nếu chúng
                  đang bị ốm hoặc ngộ độc.{" "}
                </p>
              </li>
              <li>
                <div>
                  {" "}
                  <span>Nov 29</span>
                  <h2>What is the best dog toy to buy?</h2>
                  <Link className="heart" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="twitter" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="facebook" to="#">
                    &nbsp;
                  </Link>{" "}
                </div>
                <p>
                  {" "}
                  Các lựa chọn đồ chơi cho chó gần như vô tận, vì vậy việc chọn
                  đồ chơi cho chó có thể khiến bạn choáng ngợp. Một số chủ nuôi
                  kết thúc với một đống đồ chơi đóng bụi vì đồ chơi họ chọn đơn
                  giản không khiến chó của họ thích thú. Qua bài viết này, bạn
                  sẽ nắm được chi tiết việc nên mua đồ chơi gì cho chó và một số
                  lưu ý khi chọn đồ chơi cho cún cưng. Nào cùng đọc tiếp nhé!{" "}
                </p>
              </li>
              <li>
                <div>
                  {" "}
                  <span>Nov 11</span>
                  <h2>Should dogs' toenails be trimmed?s</h2>
                  <Link className="heart" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="twitter" to="#">
                    &nbsp;
                  </Link>{" "}
                  <Link className="facebook" to="#">
                    &nbsp;
                  </Link>{" "}
                </div>
                <p>
                  {" "}
                  Có nên cắt móng chân cho chó không? Móng chân chó có cắt được
                  không? Cắt tỉa móng cho cún là một việc rất quan trọng để giúp
                  cún luôn vui vẻ và khỏe mạnh. Khi bạn không cắt móng cho cún,
                  móng sẽ mọc ra rất dài và gây ra nhiều vấn đề cho cún. Chính
                  vì thế, trong bài viết này, chúng ta sẽ cùng nhau tìm hiểu lý
                  do tại sao nên cắt móng cho cún thường xuyên.{" "}
                </p>
              </li>
            </ul>
            <div>
              {" "}
              <Link className="new" to="/blog">
                New Post
              </Link>{" "}
              <Link className="new" to="/blog">
                Old Post
              </Link>{" "}
            </div>
          </div>
          <div id="sidebar">
            <div id="section">
              <div>
                <div>
                  <h2>Archives</h2>
                  <ul className="archive">
                    <li>
                      <Link className="active" to="#">
                        2022 <span>(60)</span>{" "}
                      </Link>
                      <ul>
                        <li>
                          <Link className="active" to="#">
                            December <span>(1)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            November <span>(11)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            October <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            September <span>(8)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            August <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            July <span>(2)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            June <span />
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            May <span>(8)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            April <span>(7)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            March <span>(7)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            Febuary <span>(10)</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" to="#">
                            January <span>(1)</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        2023
                      </Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        2024
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured">
          <ul>
            <li>
              <Link className="active" to="#">
                <img
                  src="images/organic-and-chemical-free.jpg"
                  width={300}
                  height={90}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link className="active" to="#">
                <img
                  src="images/good-food.jpg"
                  width={300}
                  height={90}
                  alt=""
                />
              </Link>
            </li>
            <li className="last">
              <Link className="active" to="#">
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

export default Blog;
