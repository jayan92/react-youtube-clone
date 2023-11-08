import { Context } from "../context/contextApi";
import { useContext, useEffect } from "react";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { mobileMenu, loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div
      className={`flex flex-row w-full transition-all duration-300 transform ${
        mobileMenu ? "md:translate-x-[250px] md:w-[calc(100%-250px)]" : ""
      }`}
    >
      <div className="grow w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false;
              return <VideoCard key={item?.video?.videoId} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
