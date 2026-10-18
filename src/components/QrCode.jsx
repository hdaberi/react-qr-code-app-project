import qrCodeImg from "../assets/images/image-qr-code.png";
function QrCode() {
  return (
    <div className="qr-card">
      <div className="qr-header">
        <img
          src={qrCodeImg}
          alt="image-qr-code"
          className="qr-img"
          loading="lazy"
          width="300px"
          height="300px"
        />
      </div>
      <div className="qr-info">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="decription">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCode;
