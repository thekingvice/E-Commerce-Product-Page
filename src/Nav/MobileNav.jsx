export default function MobileNav(props) {
  const { sideMenu, setSideMenu } = props;
  const handleSideMenu = () => {
    setSideMenu("none");
  };
  return (
    <div className="Nav__mobile" style={{ display: sideMenu }}>
      <img
        className="Nav__close"
        src="/icon-close.svg"
        alt="close"
        onClick={handleSideMenu}
      />
      <a className="Nav__mobile-link" href="">
        Collections
      </a>
      <a className="Nav__mobile-link" href="">
        Men
      </a>
      <a className="Nav__mobile-link" href="">
        Women
      </a>
      <a className="Nav__mobile-link" href="">
        About
      </a>
      <a className="Nav__mobile-link" href="">
        Contact
      </a>
    </div>
  );
}
