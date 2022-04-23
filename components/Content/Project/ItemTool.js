import Image from "next/image";

function ItemCardTool(props) {

	const {
		imageFeature,
		imageWidth,
		imageHeight
	} = props;
	
	return (
		<>
					<div
						className="
							p-2
							inline-flex
					">

						<Image
							src={imageFeature}
							width={imageWidth}
							height={imageHeight}
						/>

					</div>

		</>
	);
}

export default ItemCardTool;