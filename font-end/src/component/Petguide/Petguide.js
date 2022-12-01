import React from "react";
import {Link} from "react-router-dom";
function Petguide(props) {
  return (
    <div>
      <div id="body">
        <div id="content">
          <div className="content">
            <h2 className="tilte-h2">Pet Guide</h2>
            <div>
              <p>
                {" "}
                Dưới đây là một số mẹo tìm thú cưng hữu ích cho thú cưng của
                bạn. Dễ dàng và thuận tiện để bạn tìm hiểu thêm về cách hiểu
                chúng. hướng dẫn cơ bản đến thông tin hữu ích không chỉ cho thú
                cưng của bạn mà còn cho các động vật khác.{" "}
              </p>
            </div>
            <ul className="section">
              <li>
                <h2>Pet Training Guides</h2>
                <p>
                  {" "}
                  Sự giao tiếp bằng mắt Ánh mắt là yếu tố bộc lộ cảm xúc rõ nhất
                  của con người và cả loài vật; “ngôn ngữ của đôi mắt” trong
                  việc giao tiếp giữa chủ và chó rất quan trọng. Khi bạn muốn
                  con chó thực sự nghe lời thì hãy tập trung ánh mắt vào nó và
                  ra lệnh. Đó là nguyên tắc đầu tiên trong việc đào tạo cho chó
                  sự vâng phục.{" "}
                </p>
              </li>
              <li>
                <h2>Make them Behave</h2>
                <p>
                  {" "}
                  Pet cũng giống như trẻ em vậy, chúng cần phải được dạy cách
                  sống trong nhà của bạn và việc đặt ra các quy tắc là tùy thuộc
                  vào bạn. Sau khi làm như vậy, bạn sẽ cần phải theo dõi chú Pet
                  của mình, và cung cấp cho chúng phương tiện để chúng thực hiện
                  điều được dạy.{" "}
                </p>
              </li>
              <li>
                <h2>Teach your pet to sit</h2>
                <p>
                  {" "}
                  Huấn luyện từ từ. Chó, nhất là chó con, có độ tập trung thấp
                  và rất dễ bị xao nhãng. Hãy lưu ý điều này trong quá trình
                  huấn luyện và nhớ rằng ban đầu, bạn cần phải huấn luyện thật
                  chậm. Cho chó nghỉ giải lao thường xuyên để nó có thể tập
                  trung hơn trong quá trình huấn luyện.{" "}
                </p>
              </li>
              <li>
                <h2>Use food to lure</h2>
                <p>
                  {" "}
                  Đây là một tuyệt chiêu vô cùng hữu hiệu trong thời gian đầu
                  làm quen với việc dạy chó. Những món Thức ăn cho Chó mà chú
                  chó cưng của bạn thích sẽ giúp ích rất nhiều trong việc thôi
                  thúc chú chó ngoan ngoãn học tập và tuân theo sự dạy bảo của
                  bạn đấy.{" "}
                </p>
              </li>
              <li>
                <h2>Pet name</h2>
                <p>
                  {" "}
                  Bạn cứ nghĩ tại sao con người ai cũng có họ tên? Cái tên dùng
                  để xác nhận danh tính của một người nào đó và những con chó
                  của bạn cũng cần được đặt tên gọi để chúng biết được mình là
                  ai. Khi chúng ghi nhớ được tên của nó thì bạn sẽ dễ dàng trong
                  việc dạy bảo chó với các mệnh lệnh, một con chó khi nghe chủ
                  gọi tên mình thì chúng sẽ tập trung hơn để lắng nghe mệnh lệnh
                  của chủ.{" "}
                </p>
              </li>
              <li>
                <h2>healthy Recipes for Pets</h2>
                <p>
                  {" "}
                  Andrew Knight, giáo sư thú y tại Đại học Winchester, cho biết
                  nghiên cứu của ông chỉ ra rằng chó và mèo có kết quả sức khỏe
                  tốt, hoặc tốt hơn khi ăn chế độ ăn có nguồn gốc thực vật so
                  với khi ăn thức ăn cho vật nuôi làm từ thịt, miễn là chúng
                  được nuôi dưỡng cẩn thận với việc bổ sung các chất dinh dưỡng
                  tổng hợp.{" "}
                </p>
              </li>
            </ul>
          </div>
          <div id="sidebar">
            <div id="section">
              <div>
                <div>
                  <h2>Pet Guide Overview</h2>
                  <ul>
                    <li>
                      <Link to="#">
                        Pet Trainging Guides <span>(1)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Behavior Training <span>(11)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Pet Recipes <span>(3)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Do's and Don'ts <span>(8)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Pet Foods <span>(3)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Cosplay Pets <span>(2)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Shopping Guides <span />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Pregnancy and Nursing Pets <span>(8)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Medications <span>(7)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Excercise <span>(7)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Diet <span>(10)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Grooming <span>(1)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Cosplay Pets <span>(2)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Shopping Guides <span />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Pregnancy and Nursing Pets <span>(8)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Medications <span>(7)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Excercise <span>(7)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Diet <span>(10)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Grooming <span>(1)</span>{" "}
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

export default Petguide;
