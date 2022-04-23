import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

function Layout(props) {

	const { children } = props;

	return (

		<>
			{/* navbar component */}
			<Header />

			{/* main component */}
			<Content content={children} />

			{/* footer component */}
			<Footer />

		</>

	);
}

export default Layout;