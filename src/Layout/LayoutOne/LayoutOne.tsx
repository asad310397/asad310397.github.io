import FooterOne from "./FooterOne";
import HeaderOne from "./HeaderOne";

interface LayoutProps {
  children: JSX.Element;
}
const LayoutOne = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterOne />
    </>
  );
};

export default LayoutOne;
