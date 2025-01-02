/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "Teitei Wisdom Portfolio - A brief introduction about Teitei Wisdom",
  keyword: "Software Engineer, The best engineer in Africa",
  description: "Welcome to the portfolio of Teitei Wisdom, showcasing skills, projects, and achievements.",
};
