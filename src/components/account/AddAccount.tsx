import { FC, useState } from "react";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import PlusIcon from "@/svg/PlusIcon";
import Button from "../common/Button";
import AddAccountBoxList from "./AddAccountBoxList";
import FullScreenModal from "../common/FullScreenModal";
import { AgentRegisterType } from "@/types";
import { addMyAccounts } from "@/api/account";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { ToastAtom } from "@/recoil/toastState";
import dayjs from "dayjs";

interface AddAccountProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 창 끄기
   */
  setInvisible: () => void;
}

const emptyAgent: AgentRegisterType = {
  agentId: 0,
  registeredAt: "",
};

const AddAccount: FC<AddAccountProps> = (props) => {
  const { visible, setInvisible } = props;
  const [accounts, setAccounts] = useState<AgentRegisterType[]>([emptyAgent]);
  const setToastString = useSetRecoilState(ToastAtom);
  const queryClient = useQueryClient();
  const { mutate: addAccounts } = useMutation((accountsList: AgentRegisterType[]) => addMyAccounts(accountsList), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.MY_ACCOUNTS);
    },
  });

  const handleAgentChange = (selectedBoxIndex: number, agentId: number) => {
    setAccounts((prev) => {
      const newPrev = [...prev];
      newPrev.splice(selectedBoxIndex, 1, {
        agentId,
        registeredAt: prev[selectedBoxIndex].registeredAt,
      });
      return newPrev;
    });
  };
  const hamdleRemoveClick = (idx: number) => {
    setAccounts((prev) => {
      const newPrev = [...prev];
      newPrev.splice(idx, 1);
      return newPrev;
    });
  };
  const handleDateChange = (index: number) => {
    return (date: Date) => {
      setAccounts((prev) => {
        const newPrev = [...prev];
        newPrev.splice(index, 1, {
          agentId: prev[index].agentId,
          registeredAt: dayjs(date).format("YYYY-MM-DD"),
        });
        return newPrev;
      });
    };
  };

  return (
    <FullScreenModal visible={visible} setInvisible={setInvisible}>
      <FullScreenModalDescription>
        <h2>
          새로 개설한 증권 계좌를 <br />
          추가해주세요.
        </h2>
        <ul>
          <li>계좌 개설일을 알려주시면 청약 가능한 공모주를 정확하게 알려드려요.</li>
          <li>
            유진증권, 삼성증권, 키움증권, 한화투자증권을 제외한 증권사들은 20일 내에 계좌 개설 내역이 있을 경우 신규
            계좌 개설을 제한하고 있어요.
          </li>
        </ul>
      </FullScreenModalDescription>
      <section>
        <AddAccountButton
          onClick={() =>
            setAccounts((prev) => {
              if (prev.length >= 10) return prev;
              return [...prev, emptyAgent];
            })
          }
        >
          <PlusIcon /> 새 계좌 추가
        </AddAccountButton>
        <AddAccountBoxList
          accounts={accounts}
          onDateChange={handleDateChange}
          onRemoveClick={hamdleRemoveClick}
          onAgentChange={handleAgentChange}
        />
      </section>
      <ButtonSection>
        <Button
          width="100%"
          disabled={accounts.find((item) => item.agentId > 0 && item.registeredAt.length > 0) === undefined}
          onClick={() => {
            addAccounts(accounts.filter((item) => item.agentId > 0 && item.registeredAt.length > 0));
            setAccounts([emptyAgent]);
            setInvisible();
            setToastString("계좌가 추가되었어요.");
          }}
          $font="BUTTON1_SEMIBOLD"
        >
          추가 완료
        </Button>
      </ButtonSection>
    </FullScreenModal>
  );
};

export default AddAccount;

export const FullScreenModalDescription = styled.section`
  box-sizing: border-box;
  width: 310px;
  margin-bottom: 40px;

  h2 {
    ${getFonts("H2_SEMIBOLD")}
    color: ${colors.FONT_LIGHT.PRIMARY};
    margin-bottom: 16px;
  }

  li {
    ${getFonts("BODY1_REGULAR")}
    color: ${colors.FONT_LIGHT.TERIARY};
    list-style: disc;
    text-decoration: dotted;
    margin-left: 20px;
  }

  p {
    ${getFonts("BODY1_REGULAR")}
    color: ${colors.FONT_LIGHT.TERIARY};
  }

  span {
    color: ${colors.FONT.PRIMARY};
  }
`;

const AddAccountButton = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  ${getFonts("H6_SEMIBOLD")}
  color: ${colors.FONT.PRIMARY};
  border: 1px solid ${colors.GRAY[2]};
  background-color: ${colors.WHITE};
  border-radius: 8px;
  width: 100%;

  svg {
    margin-right: 8px;
  }
`;

const ButtonSection = styled.section`
  position: fixed;
  bottom: 20px;
  left: 50%;
  translate: -50% 0;
  width: 343px;
`;
