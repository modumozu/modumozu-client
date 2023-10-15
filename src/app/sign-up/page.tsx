"use client";

import Button from "@/components/common/Button";
import { BottomSheet } from "@/components/common/bottomSheet/BottomSheet";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const SignUp = () => {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/on-boarding");
  };

  return (
    <BottomSheet visible={true} handleOverlayClick={() => {}}>
      <div>안녕</div>
      <Button width="100%">가입 완료</Button>
    </BottomSheet>
  );
};

export default SignUp;

const BottomSheetWrap = styled.div`
  padding
`;
