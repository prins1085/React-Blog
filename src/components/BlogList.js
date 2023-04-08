import React from "react";
import Button from "./UI/Button";

const BlogList = (props) => {
  const BlogDeleteHandler = (id) => {
    const BlogList = [...props.BlogData];
    const BlogIndex = props.BlogData.findIndex((data) => data.id === id);
    BlogList.splice(BlogIndex, 1);
    props.newBlogList(BlogList);
  };

  const BlogPreviewHandler = (id) => {
    props.blogId(id);
  };

  const BlogEditHandler = (data) => {
    props.editBlogData(data);
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 mx-5 mb-5">
      {props.BlogData.map((data) => (
        <div
          key={data.id}
          className="w-full max-w-[315px] shadow-lg shadow-gray-700 bg-white"
        >
          <div className="relative">
            <img
              className="h-[200px] w-full"
              src={data.image}
              alt="Blog_image"
            />
            <div className="absolute text-2xl text-white bottom-[8px] left-[16px]">
              {data.title}
            </div>
          </div>
          <div className="space-y-2 mb-1 mt-2">
        
            <div className="text-center">
              <Button
                className="bg-[#228B22] mr-2 mb-2 hover:bg-[#3CB33C]"
                onClick={() => BlogEditHandler(data)}
              >
                Edit
              </Button>
              <Button
                className="bg-[#DC143C] mr-2 mb-2 hover:bg-[#B40028]"
                onClick={() => BlogDeleteHandler(data.id)}
              >
                Delete
              </Button>
              <Button
                className="bg-[#1E90FF] hover:bg-[#1170C9]"
                onClick={() => BlogPreviewHandler(data.id)}
              >
                Info
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
