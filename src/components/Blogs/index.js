import React from "react";

// renaming from WorkCard to BlogPost
// Card will contain an image for said blog post (as with the work card)
// Blog posts will have a Title, subtitle/hook qoute and body text
// This is just a preview card for the actual post. It will click through to a full post page.
const Blogs = ({ img, name, subtitle, body, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}>
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "600px" }}>
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Post Title"}
      </h1>
      <h2 className="text-xl opacity-50">
        {subtitle ? subtitle : "Post subtitle"}
      </h2>
      <p>
        {body ? body : "lorem ipsum x100"}
      </p>
    </div>
  );
};

export default Blogs;