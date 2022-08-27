import { ComponentType } from "react";
import { Footer, Header } from "../presentation";

function withLayout<P>(Component: ComponentType<P>, headerTitle?: string) {
  const Layout = (props: P) => (
    <>
      <Header title={headerTitle} variant={headerTitle ? "DEFAULT" : "HOME"} />
      <Component {...props} />
      <Footer />
    </>
  );

  return Layout;
}

// Arrow Function Implementation
// const withLayout =
//   <P,>(Component: ComponentType<P>, headerTitle?: string) =>
//   (props: P) => {
//     console.log(props);
//     return (
//       <>
//         <Header
//           title={headerTitle}
//           variant={headerTitle ? "DEFAULT" : "HOME"}
//         />
//         <Component {...props} />
//         <Footer />
//       </>
//     );
//   };

export default withLayout;
