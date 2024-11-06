import Card from "@/app/common-components/card";
import { topStoriesArray } from "@/app/data";

const TopStories = () => {
  return (
    <div className="bg-white pt-14 pb-8 px-4  ">
      <p className="text-[#292929] text-[34px] font-bold text-center">
        Top Stories
      </p>
      <div className="overflow-auto scroll-bar-width my-5">
        <div className="inline-flex gap-3">
          {topStoriesArray.map(
            (
              {
                authorName,
                authorSrc,
                commentsCount,
                imageHeight,
                imageWidth,
                newsCategory,
                newsImage,
                title,
              },
              index
            ) => {
              return (
                <Card
                  title={title}
                  authorImage={authorSrc}
                  authorName={authorName}
                  commentCount={commentsCount}
                  imageHeight={imageHeight}
                  imageWidth={imageWidth}
                  newsCategory={newsCategory}
                  newsImage={newsImage}
                  key={index}
                  titleClass="!text-[14px]"
                  containerClass="!max-w-[300px] !w-[250px] !gap-7"
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
