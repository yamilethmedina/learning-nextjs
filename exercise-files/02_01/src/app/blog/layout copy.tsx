import SideNavNoIcon from "../ui/components/sidenav-noicon";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <SideNavNoIcon />
      {children}
    </>

  );
}
