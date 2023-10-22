export interface NewsResponse {
  news: News[];
}

export interface News {
  /**
   * key
   */
  id: number;

  /**
   * 사이트
   */
  press: string;

  /**
   * 발행일
   */
  publishedAt: string;

  /**
   * url
   */
  redirectUrl: string;

  /**
   * TODO: 채워야함
   */
  source: string;

  /**
   * 제목
   */
  title: string;
}
