import React from "react";
import Button from "./UI/Button";

const BlogPreview = (props) => {

  const PreviewCloseHandler = () => {
    props.PreviewClose();
  }

  return (
    <div className="px-3 mb-5">
      {props.BlogPreviewData.map((data) => (
        <div key={data.id}>
          <div className="mt-5 mb-10 shadow-md shadow-gray-800">
            <img
              className="h-[500px] w-full"
              src={data.image}
              alt="Blog_Images"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="max-w-full col-span-1 md:col-span-3">
              <div className="text-3xl text-gray-500 pb-8">
                {data.title}
              </div>
              <p>
                {data.description}
              </p>
            </div>
            <div className="bg-gray-200 p-5 col-span-1 space-y-5 h-fit w-fit md:w-full shadow-md shadow-gray-800">
              <div className="text-gray-500 text-xl">
                <span className="font-bold">Author : </span>{data.author}
              </div>
              <Button className="bg-[#3498DB] hover:bg-[#2980B9]" onClick={PreviewCloseHandler}>Explore More Blog</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
   
  );
};

export default BlogPreview;
