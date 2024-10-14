import SideNavNoIcon from "../ui/components/sidenav-noicon.tsx";

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
