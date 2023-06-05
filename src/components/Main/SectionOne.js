import Header from "./Header/Header";
import "./section-one.scss";

function SectionOne() {
  return (
    <section id="section-one">
      <Header />
      <div className="swipper-wrapper">
        <div className="swipper"></div>
      </div>
    </section>
  );
}

export default SectionOne;
