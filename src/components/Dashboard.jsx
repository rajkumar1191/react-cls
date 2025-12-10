import { useState, useEffect } from "react";
import "./../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import CallBackParent from "./CallBackParent";
import { Outlet } from "react-router-dom";
import Counter from "./Counter";
import UsersList from "./UserList";

function Dashboard() {
  const title = "Course List";

  //React.memo -> for component memoization -> pure component/functional component -
  //useCallback -> for function memoization ->
  //useMemo -> for value memoization

  return (
    <>
      <Header />
      <Counter />
      <hr />
      <UsersList />
      <Outlet />
      <Footer />
    </>
  );
}

export default Dashboard;
