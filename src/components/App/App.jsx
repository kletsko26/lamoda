// import createData from "@utils/createData";

import LamodaSearch from "@pages/LamodaSearch/LamodaSearch";

import S from "./app.module.scss";
// в целом это можно деструктурировать, как и все остальное
// но мне лень))
// модули / styled components я импорчу часто одним объектом,
// потому что их обычно слишком много и лень просто

const App = () => {
  return (
    <div className={S.container}>
      <LamodaSearch />
    </div>
  );
};

export default App;
