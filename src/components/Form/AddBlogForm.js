import React, { useContext, useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../Card/Card";
import AuthContext from "../auth-context";

const AddBlogForm = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (ctx.isEditData.title) {
      setTitle(ctx.isEditData.title);
      setImage(ctx.isEditData.image);
      setDescription(ctx.isEditData.description);
      setAuthor(ctx.isEditData.author);
      setId(ctx.isEditData.id);
    }
  }, [
    ctx.isEditData.title,
    ctx.isEditData.image,
    ctx.isEditData.description,
    ctx.isEditData.author,
    ctx.isEditData.id,
  ]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      title.trim().length === 0 ||
      image === null ||
      description.trim().length === 0 ||
      author.trim().length === 0
    ) {
      setFormIsValid(true);
    }


    if (title && image && description && author) {
      setFormIsValid(false);
      props.fetchFormData(title, image, description, author, id);

      setTitle("");
      setImage(null);
      setDescription("");
      setAuthor("");
      setId(null);
    }
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

 
  return (
    <Card>
      <div className="text-center font-bold text-3xl pb-2">Blog Form</div>
    
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          name="title"
          id="title"
          label="Title"
          value={title}
          onChange={titleChangeHandler}
        />
        {formIsValid && title.trim().length <= 0 ? (
          <p className="text-red-600 mt-[-17px]">Please Enter Valid Title</p>
        ) : (
          ""
        )}

        <Input
          type="file"
          name="image"
          id="image"
          label="Image"
          onChange={imageChangeHandler}
        />
        {formIsValid && image === null ? (
          <p className="text-red-600 mt-[-17px]">Please Select An Image</p>
        ) : (
          ""
        )}

        <div className="my-4 flex flex-col">
          <label
            className="font-bold flex-1 text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="flex-3 py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:bg-purple-100 h-[100px]"
            name="description"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          />
          {formIsValid && description.trim().length <= 0 ? (
            <p className="text-red-600">Please Enter Valid Description</p>
          ) : (
            ""
          )}
        </div>
        <Input
          type="text"
          name="author"
          id="author"
          label="Author"
          value={author}
          onChange={authorChangeHandler}
        />
        {formIsValid && author.trim().length <= 0 ? (
          <p className="text-red-600 mt-[-17px]">Please Enter Valid Author</p>
        ) : (
          ""
        )}

        {id && (
          <Button className="bg-[#228B22] hover:bg-[#3CB33C]" type="submit">
            Edit Blog
          </Button>
        )}
        {!id && (
          <Button className="bg-[#3498DB] hover:bg-[#2980B9]" type="submit">
            Add Blog
          </Button>
        )}
      </form>
    </Card>
  );
};

export default AddBlogForm;
