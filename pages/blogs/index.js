import SEO from "../../components/Header/Seo";
import Layout from "../../components/Layout";

function Blog(props) {
	return (
		<>

		<SEO
			title={"Blogs"}
			description={"My Blogs."}
		/>
		
		<Layout>
			<div className="h-screen"></div>
		</Layout>
		</>
	);
}

export default Blog;