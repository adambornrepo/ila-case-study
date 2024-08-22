import { Toaster } from "react-hot-toast";

const CustomizedToster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{
        top: 70,
        left: 20,
        bottom: 20,
        right: 20,
      }}
      toastOptions={{
        className: "",
        duration: 3000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        success: {
          style: {
            background: "rgb(63 98 18)",
            color: "white",
          },
        },
        error: {
          style: {
            background: "rgb(159 18 57)",
            color: "white",
          },
        },
      }}
    />
  );
};

export default CustomizedToster;
