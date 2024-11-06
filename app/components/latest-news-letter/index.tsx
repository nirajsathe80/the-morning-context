import Card from "@/app/common-components/card";
import { latestNewsLetterArray } from "@/app/data";

const NewsLetter = () => {
  return (
    <div className="px-4">
      <p className="text-[#292929] text-[34px] font-bold text-center">
        Latest Newsletters
      </p>
      <p className="text-[#292929] font-normal text-sm my-5">
        A wealth of knowledge from India&apos;s top writers curated for you by
        The Morning Context.
      </p>
      <div>
        {latestNewsLetterArray.map(
          (
            {
              authorName,
              authorSrc,
              commentsCount,
              newsCategory,
              title,
              articleReadTime,
              imageHeight,
              imageWidth,
              newsImage,
            },
            index
          ) => {
            return (
              <Card
                key={index}
                authorName={authorName}
                authorImage={authorSrc}
                commentCount={commentsCount}
                newsCategory={newsCategory}
                title={title}
                articleReadTime={articleReadTime}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                newsImage={newsImage}
                categoryClass="!text-[#ECB731]"
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
