import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const OrderRoutes = () => {
  const { ispayment } = useUserContext();

   //   let auth = { isLogin: false };

  return ispayment == 1 ? <Outlet /> : <Navigate to="/orderpaymet" />;
};

export default OrderRoutes;
