import { FC, ReactNode } from "react";

interface OnboardingContentProps {
  title: ReactNode;
  content: ReactNode;
}

const OnboardingContent: FC<OnboardingContentProps> = ({ title, content }) => {
  return (
    <>
      {title}
      {content}
    </>
  );
};

export default OnboardingContent;
