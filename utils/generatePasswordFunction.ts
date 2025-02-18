	export const generatePasswordFunction = ({setValue}: { setValue: (value: string) => void }) => {
		const randomPassword = Math.floor(100000 + Math.random() * 900000).toString()
		setValue(randomPassword)
	}