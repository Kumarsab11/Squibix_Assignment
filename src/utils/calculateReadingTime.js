const calculateReadingTime = (content) => {
  const words = content.split(" ").length;
  return `${Math.ceil(words / 200)} min read`;
};

export default calculateReadingTime;