import { useEffect } from "react";

const Kakao = () => {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log("code ==> ", code);
  }, []);
};

export default Kakao;
