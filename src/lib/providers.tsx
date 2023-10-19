"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntResistry";
import { ConfigProvider } from "antd";
import store from "@/Redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 8,
            colorText: "#000",
            fontFamily: "default",
            colorBgSpotlight: "red",
            colorBgContainer: "#fff",
          },
        }}
      >
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default Providers;
