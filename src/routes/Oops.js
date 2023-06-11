import Header from "../components/Header/Header";
function Oops() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100% - 70px)",
          color: "#ffffff",
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{ color: "#f09819", fontSize: "23px", fontWeight: 500 }}
          >
            404
          </span>
          <div
            style={{
              width: "1px",
              height: "33px",
              backgroundColor: "#fff",
              borderRadius: "2rem",
            }}
          ></div>
          <span style={{ fontSize: "16px", fontWeight: 400 }}>
            This page could not be found.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Oops;
