const AppLayout = ({ children, WaterfallFont }: any) => {
  return (
    <>
      <main className={WaterfallFont.variable}>{children}</main>
    </>
  );
};

export default AppLayout;
