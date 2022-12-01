import React from "react";
import { Link } from "react-router-dom";

function Contacts(props) {
  return (
    <div>
      <>
        <div id="body">
          <div id="content">
            <div className="content">
              <h2 className="tilte-h2">Contact us</h2>
              <div>
                <p>
                  {" "}
                  Petshop được xây dựng dựa trên tiêu chí là cổng thông tin
                  khổng lồ và hoàn toàn miễn phí về các vấn đề xunh quanh động
                  vật , đặc biệt là thú cưng, cụ thể như các bệnh về chó mèo,
                  các thực phẩm dinh dưỡng dành cho thú cưng, cách chăm sóc và
                  điều trị bệnh cho chó mèo… Tất cả những thông tin tại Petshop
                  được sưu tầm và tham khảo từ nhiều nguồn khác nhau có chọn
                  lọc, bên cạnh đó còn là trải nghiệm thực tế của chúng tôi
                  trong quá trình nuôi thú cưng để đem đến cho độc giả những
                  thông tin chính xác và hữu ích nhất. Petshop.com còn là nơi
                  kết nối, truyền tải thông tin từ bác sĩ thú y tới người đọc
                  nhằm cung cấp đến cho người nuôi động vật, thú cưng những
                  thông tin chính xác nhất, được kiểm duyệt từ đội ngũ bác sĩ
                  thú y đầy uy tín. Chúng tôi thành lập Petshop dựa trên tình
                  yêu thương dành cho động vật, thú nuôi với mong muốn tất cả
                  các bé chó mèo, thú nuôi sẽ được chăm sóc, cứu chữa kịp thời,
                  và không một bé nào phải “ra đi” vì chủ nuôi hay người đang
                  cần thông tin lại không được cung cấp thông tin một cách chính
                  xác và đầy đủ.{" "}
                </p>
              </div>
              <ul className="connect">
                <li>
                  <h2>Customer Sales and Serevice</h2>
                  <p>
                    {" "}
                    <span>
                      E-mail:{" "}
                      <Link to="#">Thuanb1910456@student.ctu.edu.vn</Link>
                    </span>{" "}
                    <span>
                      Call or e-mail us for help with any aspect of your
                      purchase, online or offline.
                    </span>{" "}
                  </p>
                  <p>
                    {" "}
                    <span>Call toll-free: 0786877893</span>{" "}
                    <span>Call toll-free: 0826022017</span>{" "}
                    <span>Call toll-free: 0826050801</span>{" "}
                  </p>
                </li>
                <li>
                  <h2>Store Hours</h2>
                  <p>
                    {" "}
                    <span>
                      Thứ hai đến thứ sáu 8:00 sáng - 10:00 tối (GMT)
                    </span>{" "}
                    <span>Closed Saturday and Sunday</span>{" "}
                  </p>
                </li>
                <li>
                  <h2>Mailing Address</h2>
                  <p>
                    {" "}
                    <span>Petshop</span> <span>Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</span>{" "}
                    <span>232/19A, Đ. 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ</span>{" "}
                    <span>Việt Nam</span>{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div id="sidebar">
              <div className="connect">
                <h2>Follow Us</h2>
                <ul>
                  <li>
                    <Link className="facebook" to="#">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link className="subscribe" to="#">
                      Subscribe
                    </Link>
                  </li>
                  <li>
                    <Link className="twitter" to="#">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="flicker" to="#">
                      Flicker
                    </Link>
                  </li>
                </ul>
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
                  <Link to="#">Friendly Pets</Link>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
                  diam nonummy nib.{" "}
                  <Link className="more" to="#">
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
                  Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed
                  diam euis.{" "}
                  <Link className="more" to="#">
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
                  <Link className="more" to="#">
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
                  <Link className="more" to="#">
                    Read More
                  </Link>{" "}
                </p>
                <img
                  src="images/pet-lover.jpg"
                  width={240}
                  height={186}
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}

export default Contacts;
