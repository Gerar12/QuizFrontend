const Home = () => {
  return (
    <>
      <div className="toggle-switch">
        <input id="darkMode" type="checkbox" className="checkbox" hidden />
        <label htmlFor="darkMode" className="label">
          <div className="ball"></div> {/* El círculo que se mueve */}
        </label>
      </div>
    </>
  );
};

export default Home;
