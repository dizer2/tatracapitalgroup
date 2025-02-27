import React from 'react'


export const metadata = {
	title: "Admin",
};


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
		{children}
	 </div>
  );
}
