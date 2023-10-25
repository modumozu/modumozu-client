export interface IPODetailResponse {
  /**
   * 분류
   */
  category: string;

  /**
   * 기관투자자 경쟁률
   */
  competitionRate: number;

  /**
   * 수요예측 시작일
   */
  demandForecastBeginAt: string;

  /**
   * 수요예측 종료일
   */
  demandForecastEndAt: string;

  /**
   * 확정공모가 (확정공모가 값이 0 인 경우 희망공모가를 활용")
   */
  fixedOfferPrice: number;

  /**
   * key
   */
  id: number;

  /**
   * 기관투자자 경쟁률
   */
  investorCompetitionRate: number;

  /**
   * 상장일
   */
  listingAt: string;

  /**
   * 의무보유확약률
   */
  mandatoryHoldingCommitmentRate: number;

  /**
   * 희망공모가 상한
   */
  maxDesiredOfferPrice: number;

  /**
   * 희망공모가 하한
   */
  minDesiredOfferPrice: number;

  /**
   * 공모주명
   */
  name: string;

  /**
   * 사용자가 보유하지 않은 주간사(증권사) ID 리스트
   */
  nonRemainAgents: number[];

  /**
   * 청약 시작일
   */
  offerBeginAt: string;

  /**
   * 청약 종료일
   */
  offerEndAt: string;

  /**
   * 관심 공모주 여부
   */
  pinned: false;

  /**
   * 공모주 제안
   */
  proposal: Proposal;

  /**
   * 공모주 수량
   */
  publicOfferingAmount: number;

  /**
   * 공모금액
   */
  publicOfferingTotalPrice: number;

  /**
   * 환불일
   */
  refundAt: string;

  /**
   * 사용자가 보유한 주간사(증권사) ID 리스트
   */
  remainAgents: number[];

  /**
   * 공모주 진행 상태
   */
  status: Status;

  /**
   * 의무보유 확약비율 - 15일 확약 신청수량
   */
  subscriptionAmountByPeriod15Days: string;

  /**
   * 의무보유 확약비율 - 30일 확약 신청수량
   */
  subscriptionAmountByPeriod30Days: string;

  /**
   * 의무보유 확약비율 - 90일 확약 신청수량
   */
  subscriptionAmountByPeriod90Days: string;

  /**
   * 의무보유 확약비율 - 180일 확약 신청수량
   */
  subscriptionAmountByPeriod180Days: string;

  /**
   * 의무보유 확약비율 - 미확약 신청수량
   */
  subscriptionAmountByPeriodByNone: string;

  /**
   * 의무보유 확약비율 - 합계
   */
  subscriptionAmountByTotal: string;

  /**
   * 청약증거금율
   */
  subscriptionDepositRate: number;
}

export interface Proposal {
  /**
   * 카드 타입
   */
  cardType: CardType;

  /**
   * 제안 타입
   */
  proposalType: ProposalType;

  /**
   * 개설 필요일
   */
  needAt: string;

  /**
   * 주간사(증권사) ID
   */
  agentId: number;
}

type CardType = "A" | "B" | "C" | "D" | "E";
/**
 * NONE: CTA 버튼을 표기할 필요없는 경우
 * CREATE: 계좌 개설하기
 * DISABLE : 청약 불가, 계좌 개설 가능 기간이 지난 경우
 * RESTRICT: 계좌 개설 후 20일 이내 신규 계좌 개설이 제한되는 경우
 * TIP : 계좌 개설 후 20일 이내 신규 계좌 개설이 제한되는 경우, 연계 은행으로 인한 개설 방법은 존재 (**제한 해제 팁**)
 */
export type ProposalType = "NONE" | "CREATE" | "DISABLE" | "RESTRICT" | "TIP";

/**
 * READY: 청약 전
 * IN_PROGRESS: 청약 중
 * DONE: 청약 종료
 */
export type Status = "READY" | "IN_PROGRESS" | "DONE";
