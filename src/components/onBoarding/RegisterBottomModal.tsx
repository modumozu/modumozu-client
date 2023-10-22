import { FC } from "react";
import { BottomSheet, BottomSheetProps } from "../common/bottomSheet/BottomSheet";

const OnboardingRegisterBottomModal: FC<Omit<BottomSheetProps, "children">> = ({ visible, handleOverlayClick }) => {
  return (
    <BottomSheet visible={visible} handleOverlayClick={handleOverlayClick}>
      <div>good</div>
    </BottomSheet>
  );
};

export default OnboardingRegisterBottomModal;
