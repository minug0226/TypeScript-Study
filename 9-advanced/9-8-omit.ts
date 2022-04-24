{
  // omit에 대해 학습했다.
  // pick과 반대로 빼고 싶은것만 빼는것을 말한다.
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // pick과 다르게
  // 다른 어떤 종류의 키도 전달이 가능하다.
  type VideoMetadata = Omit<Video, "url" | "data">;

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
