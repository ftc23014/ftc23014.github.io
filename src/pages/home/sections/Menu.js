import "./Menu.css";

export default function TopMenu() {
  function scrollToWithOffset(id) {
    return function () {
      const element = document.getElementById(id);
      const yOffset = -80; // Adjust this value to control the gap above the section
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    };
  }

  return (
    <div className="menu">
      <h3 onClick={scrollToWithOffset("section-whoarewe")}>Who Are We</h3>
      <h3 onClick={scrollToWithOffset("section-sponsors")}>Sponsors</h3>
      <h3 onClick={scrollToWithOffset("section-ourteam")}>Our Team</h3>
      <h3 onClick={scrollToWithOffset("section-outreach")}>Outreach</h3>
    </div>
  );
}
