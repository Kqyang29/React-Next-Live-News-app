import "../styles/globals.css";
import Header from "./Header";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html>
			{/* <head /> */}
			<Provider>
				<body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
					<Header />
					<div className="max-w-6xl mx-auto px-5">{children}</div>
				</body>
			</Provider>
		</html>
	);
}
