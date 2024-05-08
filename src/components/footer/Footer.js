import './Footer.css';
function Footer(props) {
  console.log(props);
  return (
    <>
      <footer>
        <div>
          <a href="facebook">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
              alt="Facebook"
            />
          </a>
          <a href="instagram">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              alt="Instagram"
            />
          </a>
          <a href="x">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
              alt="X"
            />
          </a>
        </div>
        <p>&copy; 2024 Hassan Ayman. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
