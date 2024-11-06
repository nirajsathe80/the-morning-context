import Card from "@/app/common-components/card";
import { todayEditionArticleArray } from "@/app/data";
const TodaysEdition = () => {
  return (
    <div className="bg-[#FFF9F1] px-4">
      <p className="text-center text-[#292929] text-[34px] font-bold pt-5 pb-5">
        {"Today's Edition"}
      </p>
      <div className="block sm:flex sm:flex-wrap sm:gap-20">
        {todayEditionArticleArray.map(
          (
            {
              newsCategory,
              newsImage,
              title,
              description,
              articleReadTime,
              authorName,
              authorSrc,
              commentsCount,
            },
            index
          ) => (
            <Card
              key={index}
              newsCategory={newsCategory}
              newsImage={newsImage}
              title={title}
              description={description}
              articleReadTime={articleReadTime}
              authorImage={authorSrc}
              authorName={authorName}
              commentCount={commentsCount}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodaysEdition;
