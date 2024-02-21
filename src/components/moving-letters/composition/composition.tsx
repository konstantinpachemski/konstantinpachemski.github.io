import { useEffect } from "react";
import "./composition.css";
import {
	loadAnimation,
	loadCompositionHTML,
	loadBackground,
} from "./componentData";

interface CompositionProps {
	animationNumber: number;
}

const Composition = (props: CompositionProps) => {
	const { animationNumber } = props;

	useEffect(() => loadAnimation(animationNumber), [animationNumber]);

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
			<div className="composition-wrapper">
				{loadCompositionHTML(animationNumber)}
			</div>
		</div>
	);
};

export default Composition;
