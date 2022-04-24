{
  // pick 타입에 대해서 학습했다.
  // 기존에 타입에서 원하는 속성과 밸류들만 뽑아서 만들 수 있게해준다.
  // 키워드 Pick<>을 써주면 된다.
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 타입을 선언해줘서 재사용할 수 있게 만드는 것이 좋다.
  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
