import Header from '@/components/shared/nav/header';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
			{children}
		</>
  );
}