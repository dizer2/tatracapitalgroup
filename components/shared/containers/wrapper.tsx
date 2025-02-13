
export default function wrapper({children} : Readonly<{children: React.ReactNode}>) {
	return (
		<div>
			{children}
		</div>
	)
}
