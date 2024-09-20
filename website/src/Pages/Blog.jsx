import React from "react";
import BlogCard from "../components/BlogCard";
import InnerBanner from "../helper/InnerBanner";

import bloggrid1 from "../assets/blog-2.jpg";
import bloggrid2 from "../assets/blog-3.jpg";
import bloggrid3 from "../assets/blog-4.jpg";
import bloggrid4 from "../assets/blog-5.jpg";
import bloggrid5 from "../assets/blog-6.jpg";
import bloggrid6 from "../assets/blog-7.jpg";
import bloggrid7 from "../assets/blog-8.jpg";
import bloggrid8 from "../assets/blog-9.jpg";

const Blog = () => {
  return (
    <div>
      <div>
        <InnerBanner title="Blog" Breadcrumbs="Fashion" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 py-9 px-8 ">
        <BlogCard
          image={bloggrid1}
          title={`The next generation of leather alternatives`}
        />
        <BlogCard
          image={bloggrid2}
          title={`An Exclusive Clothing Collboration`}
        />
        <BlogCard
          image={bloggrid3}
          title={`Hello Fashion by Colombian-American`}
        />
        <BlogCard image={bloggrid4} title={`Christine Is A True Style Icon`} />
        <BlogCard
          image={bloggrid5}
          title={`Effortlessly Blends the Carefree Style`}
        />
        <BlogCard
          image={bloggrid6}
          title={`The Variety of Styles and Prices are Endless`}
        />
        <BlogCard
          image={bloggrid7}
          title={`Something About This Type of Jeans`}
        />
        <BlogCard
          image={bloggrid8}
          title={`One of The Most Iconic Fashion Bloggers`}
        />
      </div>
    </div>
  );
};

export default Blog;
