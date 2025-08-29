"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #a8e063, #56ab2f)",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        color: "#222",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "20px" }}>
        <Image
          src="/logo-telugeagro.png"
          alt="Teluge Agro Logo"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            backgroundColor: "white",
            padding: "10px",
          }}
        />
      </div>

      {/* Username */}
      <h1 style={{ fontWeight: "bold", marginBottom: "8px" }}>@telugeagro</h1>

      {/* Deskripsi */}
      <p style={{ margin: "0 auto", maxWidth: "320px" }}>
        Supplier Pisang Dan Spesialis - Good Bananas Supplier & Specialist Until
        Export, Purworejo Central Java ID
      </p>

      {/* Tombol Sosmed */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "320px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <a
          href="https://www.tokopedia.com/telugeagro"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://logos-world.net/wp-content/uploads/2021/08/Tokopedia-Logo.png"
            alt="Tokopedia"
            style={iconStyle}
          />
          Tokopedia
        </a>

        <a
          href="https://shopee.co.id/t3luge_agro?is_from_login=true"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shopee_logo.svg"
            alt="Shopee"
            style={iconStyle}
          />
          Shopee
        </a>

        <a
          href="https://www.instagram.com/teluge_agro?igsh=cXR3YWtxaDNnYjJw"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            style={iconStyle}
          />
          Instagram
        </a>

        <a
          href="https://wa.me/628112638318?text=Halo%20Teluge%20Agro,%20saya%20tertarik%20dengan%20produk%20pisang%20Anda!"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={iconStyle}
          />
          WhatsApp
        </a>

        <a
          href="https://www.facebook.com/TelugeAgro?rdid=ba1ZrBdIXWKmtGmH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CPJqr4wzQ%2F%23"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            style={iconStyle}
          />
          Facebook
        </a>

        <a
          href="https://www.google.com/maps/place/Teluge+Agro+-+Supplier+Pisang+dan+Spesialis/@-7.7408703,109.9370574,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e7ac390dce0a6eb:0xf0cb3eb8af2c7312!8m2!3d-7.7408703!4d109.9370574!16s%2Fg%2F11hfg1m849?entry=ttu&g_ep=EgoyMDI5MDgyNS.0wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg"
            alt="Google Maps"
            style={iconStyle}
          />
          Google Maps
        </a>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#357a38",
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  borderRadius: "30px",
  fontWeight: "bold",
  fontSize: "18px",
  gap: "12px",
  justifyContent: "center",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};
