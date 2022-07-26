import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name={'theme-color'} content={'#000000'} />

					<link rel={'preload'} as={'style'} href={'/fonts/fonts.css'} />

					<link rel={'stylesheet'} href={'/fonts/fonts.css'} />
				</Head>

				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}
