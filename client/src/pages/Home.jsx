import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Slider from "../components/Slider";
import Slider1 from "../assets/images/slider1.webp";
import Slider2 from "../assets/images/slider2.webp";
import Slider3 from "../assets/images/slider3.webp";
import Slider4 from "../assets/images/slider4.webp";
import Draw1 from "../assets/images/draw-1.webp";
import Draw2 from "../assets/images/draw-2.webp";
import Draw3 from "../assets/images/draw-3.webp";
import RareBottle from "../assets/images/rare.webp";
import RareItold from "../assets/images/rare_itold_img.png";
import Draw from "../components/Draw";
import "../style/pages/Home.scss";
import Product from "../components/Product";
import { productList } from "../assets/data";
import Button from "../components/common/Button";
import { ImQuotesLeft } from "react-icons/im";
const Home = () => {
  const slides = [Slider1, Slider2, Slider3, Slider4];
  const draws = [
    {
      image: Draw1,
      description: "1500+ bottles to choose from",
      title: "Search",
    },
    {
      image: Draw2,
      description: "Checkout in seconds",
      title: "Tap",
    },
    {
      image: Draw3,
      description: "Delivered to your door within days",
      title: "Drink",
    },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <Slider slides={slides} />
        <div className="draws">
          {draws.map((draw, index) => (
            <Draw draw={draw} key={index} />
          ))}
        </div>
        <section>
          <h3 className="h3_title">
            Shop <span>your favorites</span>
          </h3>
          <div className="product_list">
            {productList.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </section>
        <section className="rare_bottle_section">
          <div className="title_box">
            <h3 className="h3_title">
              Shop <span>Whiskey</span>
            </h3>
            <Button
              buttonStyle={"Button_1"}
              handleOnClick={() => {}}
              title="Show All"
            />
          </div>
          <div className="rare_section">
            <div className="rare_bottle_box">
              <img src={RareBottle} alt="Rare Bottle" loading="lazy" />
            </div>
            <div className="rare_list_box">
              <div className="rare_list product_list">
                {productList.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
              </div>
              <div className="rare_creative_box">
                <img src={RareItold} alt="Rare Itold" />
                <span>
                  Whether you're sending a gift to someone special or simply
                  just adding to your collection, let The Bottle Flow be your
                  one stop shop for everything rare.
                </span>
                <Button
                  buttonStyle={"Button_1"}
                  handleOnClick={() => {}}
                  title="Show All"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="testimonials_section">
          <div className="testimoials">
            <h3 className="h3_title">
              Read What Others <span>Are Saying</span>
            </h3>
            <div className="testimonial_box">
              <div className="testimonial">
                <ImQuotesLeft />
                <span></span>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
