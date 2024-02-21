import { useEffect } from "react";
import "./composition.css";
import {
	loadAnimation,
	loadCompositionHTML,
	loadBackground,
} from "./componentData";
import AnimationsController from "../../../AnimationsController";

interface CompositionProps {
	animationNumber: number;
}

const Composition = (props: CompositionProps) => {
	const { animationNumber } = props;
	const { handleCompositionWrapperClick } = AnimationsController();

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
			<div className="composition-wrapper" onClick={handleCompositionWrapperClick}>
				{loadCompositionHTML(animationNumber)}
			</div>
		</div>
	);
};

export default Composition;
