import dynamic from "next/dynamic";

function NoSsr({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
