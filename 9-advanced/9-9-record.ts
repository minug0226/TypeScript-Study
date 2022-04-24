{
  // record 타입에 대해 학습했다.
  // 어떤걸 연결하거나 묶고 싶을 때 쓴다.
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // 이걸 엮을 수 있게 하는게 record 타입이다.
  // record는 연결해줘요!
  // page를 키로 삼고 PageInfo를 Value를 삼는다.
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
