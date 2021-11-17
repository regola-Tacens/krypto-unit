import upArrow from "../assets/img/up-chevron.png";

const ScrollUp = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <img
      className="scrollUp"
      src={upArrow}
      alt="scroll up"
      onClick={scrollUp}
    />
  );
};

export default ScrollUp;
