import React, { useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList";
import AddBlogForm from "./components/Form/AddBlogForm";
import BlogPreview from "./components/BlogPreview";
import AuthContext from "./components/auth-context";

function App() {
  const [BlogData, setBlogData] = useState([]);
  const [BlogPreviewData, setBlogPreviewData] = useState([]);
  const [showComponent, setShowComponent] = useState(true);
  const [BlogEditData, setBlogEditData] = useState([]);

  const AddFormDataHandler = (title, image, description, author, id) => {
    if (id === null) {
      setBlogData((prevBlogList) => {
        return [
          ...prevBlogList,
          {
            title: title,
            image: image,
            description: description,
            author: author,
            id: Math.random().toString(),
          },
        ];
      });
    } else {
      const BlogEditIndex = BlogData.findIndex((data) => data.id === id);
      BlogData.splice(BlogEditIndex,1);
      setBlogData((prevBlogList) => {
        return [
          ...prevBlogList,
          {
            title: title,
            image: image,
            description: description,
            author: author,
            id: id,
          },
        ];
      });
      setBlogEditData([]);
    }
  };

  const BlogDataHandler = (BlogList) => {
    setBlogData(BlogList);
  };

  const BlogPreviewHandler = (id) => {
    const BlogIndex = BlogData.findIndex((data) => data.id === id);
    setBlogPreviewData([
      {
        title: BlogData[BlogIndex].title,
        image: BlogData[BlogIndex].image,
        description: BlogData[BlogIndex].description,
        author: BlogData[BlogIndex].author,
        id: BlogData[BlogIndex].id,
      },
    ]);
    setShowComponent(false);
  };

  const PreviewCloseHandler = () => {
    setShowComponent(true);
  };

  const BlogEditHandler = (data) => {
    setBlogEditData(data);
  };

  return (
    <AuthContext.Provider value={{ isEditData: BlogEditData }}>
      <div className="App">
        {showComponent && <AddBlogForm fetchFormData={AddFormDataHandler} />}
        {showComponent && (
          <BlogList
            BlogData={BlogData}
            newBlogList={BlogDataHandler}
            blogId={BlogPreviewHandler}
            editBlogData={BlogEditHandler}
          />
        )}
        
        {!showComponent && (
          
          <BlogPreview
            BlogPreviewData={BlogPreviewData}
            PreviewClose={PreviewCloseHandler}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
