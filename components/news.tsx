import React from "react";
import NewsComponent from "./newsComponent";

const news = [
  {
    title: "News 1",
    date: "2024-02-23",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint excepturi iste ullam doloribus animi sunt minima ut itaque voluptatum fugiat velit nam neque error iusto maxime laboriosam doloremque, nesciunt placeat!",
  },
  {
    title: "News 2",
    date: "2024-02-22",
    content: "Content of News 2",
  },
  {
    title: "News 3",
    date: "2024-02-21",
    content: "Content of News 3",
  },
  {
    title: "News 4",
    date: "2024-02-20",
    content: "Content of News 4",
  },
  {
    title: "News 5",
    date: "2024-02-19",
    content: "Content of News 5",
  },
  {
    title: "News 6",
    date: "2024-02-18",
    content: "Content of News 6",
  },
];
//

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h2 className="font-light text-2xl">Our Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 h-5/6 mt-16">
        {news.map((data, index) => {
          return (
            <NewsComponent
              key={index}
              content={data.content}
              date={data.date}
              title={data.title}
            />
          );
        })}
      </div>
      <h2 className="text-capital-green text-sm text-center cursor-pointer mt-8">
        Load More...
      </h2>
    </div>
  );
};

export default News;
