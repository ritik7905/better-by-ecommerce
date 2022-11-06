import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";

// ===================Routes..===============
import {
  About_Page,
  Cart_Page,
  Contact_Page,
  Home_Page,
  Page_Not_Found,
  product_Details,
  Shop_Page,
} from "./common/routes";

// ===================Pages===============
import {
  About,
  Cart,
  Contact,
  Home,
  PageNotFound,
  Shop,
  SingleProductDetails,
} from "./pages";
import { AppFooter, AppHeader } from "./common";

const { Content } = Layout;

const AppRouter = () => {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Routes>
          <Route exact path={Home_Page} element={<Home />} />
          <Route path={Shop_Page} element={<Shop />} />
          <Route
            path={`${product_Details}/:id`}
            element={<SingleProductDetails />}
          />
          <Route path={About_Page} element={<About />} />
          <Route path={Contact_Page} element={<Contact />} />
          <Route path={Cart_Page} element={<Cart />} />
          <Route path={Page_Not_Found} element={<PageNotFound />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppRouter;
