import { FC, ReactNode } from "react";

interface OnboardingContentProps {
  title: string;
  description: string;
  content: ReactNode;
}

const OnboardingContent: FC<OnboardingContentProps> = ({ title, description, content }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{content}</div>
    </div>
  );
};

export default OnboardingContent;
