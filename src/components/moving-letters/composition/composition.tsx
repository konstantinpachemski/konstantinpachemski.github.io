import "./composition.css";
import {
	loadCompositionHTML,
	loadBackground,
} from "./componentData";

interface CompositionProps {
	animationNumber: number;
	onClickCompositionWrapper: (e) => void;
}

const Composition = (props: CompositionProps) => {
	const { animationNumber, onClickCompositionWrapper } = props;

	// useEffect(() => loadAnimation(animationNumber), [animationNumber]);

	return (
		<div
			className="composition"
			style={{ background: loadBackground(animationNumber) }}
		>
			<span className="composition-hint">
				<img
					className="composition-hint-arrows"
					alt="Back"
					src="/source.svg"
					width="18"
					height="13"
				/>
				Source
			</span>
			<div
				className="composition-wrapper"
				data-color={loadBackground(animationNumber)}
				onClick={onClickCompositionWrapper}
			>
				{loadCompositionHTML(animationNumber)}
			</div>
		</div>
	);
};

export default Composition;
