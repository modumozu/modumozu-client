import ShareIcon from "@/svg/ShareIcon";
import { FC, useEffect } from "react";
import { styled } from "styled-components";

interface KakaoShareButtonProps {
  id: number;
  name: string;
}

const KakaoShareButton: FC<KakaoShareButtonProps> = (props) => {
  const { id, name } = props;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(String(process.env.NEXT_PUBLIC_KAKAO_KEY));
  }, []);

  const handleShardClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: name,
        description: "모두모주에서 공모주 정보를 확인해보세요.",
        imageUrl: "https://github.com/8princesses/modumozu-client/assets/52477327/29213dce-92f4-45a9-a598-8a81d35c3dfd",
        link: {
          mobileWebUrl: "https://modumozu.vercel.app/",
          webUrl: `https://modumozu.vercel.app/`,
        },
      },
      buttons: [
        {
          title: "자세히보기",
          link: {
            mobileWebUrl: "https://modumozu.vercel.app/",
            webUrl: "https://modumozu.vercel.app/",
          },
        },
      ],
    });
  };

  return <ShareButton onClick={handleShardClick} />;
};

export default KakaoShareButton;

const ShareButton = styled(ShareIcon)`
  cursor: pointer;
`;
