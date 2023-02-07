import Marquee from "react-fast-marquee";
import "../styles/Gallery.css";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";
import img6 from "../assets/img_6.jpg";
import img7 from "../assets/img_7.jpg";

const gallerys = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
];

const Gallery = () => {
  const skillBoxStyle = {
    backgroundColor: "#2D2098",
    boxShadow: "0px 0px 14px 1px #b0b0b0",
  };
  return (
    <div id="skills" className="skills">
      <div className="section-heading flex">
        <h1>Gallery</h1>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {gallerys.map((gallery) => (
              <div className="skill--box" style={skillBoxStyle}>
                <img src={gallery.image} alt="" />
                {/* <h3 style={{color: "#fff"}}>
                                    {gallery.title}
                                </h3> */}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
