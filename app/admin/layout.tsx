import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
		<p>Admin ALYOUR</p>
		{children}
	 </div>
  );
}
