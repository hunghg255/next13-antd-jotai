import { Toaster } from 'sonner';

const AppLayout = ({ children }: any) => {
  return (
    <>
      <main>{children}</main>

      <Toaster position='top-center' />
    </>
  );
};

export default AppLayout;
