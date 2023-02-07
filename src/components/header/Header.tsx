import Headers from "./Header.module.css";

const Header = () => {
  return (
    <header className={Headers.header}>
      <h1 className={Headers.title}>都道府県別総人口推移グラフ</h1>
    </header>
  );
};

export default Header;
