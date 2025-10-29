
const Layout = ({ children }) => {
  return (
   <>
   {/* <CustomCursor /> */}
     <div className="lg:max-w-[1400px] justify-center  items-center  max-w-[486px] md:max-w-[920px] mx-auto px-4 md:px-8">
      {children}
    </div>
   </>
  );
};

export default Layout;
