import * as Component from "./component";
import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import * as store from "./component/store";
function App() {
  const initiaState = { user: null, post: [] };
  const [state, dispatch] = useReducer(store.Reducer, initiaState);
  return (
    <store.AppContext.Provider value={{state,dispatch}}>
      <div className="Container">
        <Component.Header />
        <Routes>
          <Route path="/login" element={<Component.Login />} />
          <Route path="/register" element={<Component.Register />} />
          <Route path="/" element={<Component.Home />} />
          <Route path="/blog" element={<Component.Blog />} />
          <Route path="/contacts" element={<Component.Contacts />} />
          <Route path="/petguide" element={<Component.PetGuide />} />
          <Route path="/PetMart" element={<Component.PetMart/>} />
          <Route path="/cart" element={<Component.Cart/>} />
          <Route path="/bill" element={<Component.Bill/>} />
          <Route path="/admin" element={<Component.AdminHome/>} />
          <Route path="/bills" element={<Component.AdminBill/>} />
        </Routes>
        <Component.Footer />
      </div>
    </store.AppContext.Provider>
  );
}
export default App;
