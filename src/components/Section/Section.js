const Section = ({ title, children }) => {
  return (
    <>
      <h2> {title} </h2>
      {children}
    </>
  );
};

// const Section = ({ children }) => {
//   return (
//     <>
//       <h2> Please leave feedback </h2>
//       {children}
//     </>
//   );
// };

export default Section;
