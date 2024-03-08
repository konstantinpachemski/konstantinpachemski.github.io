import { useEffect } from "react";

const TestingComponent = () => {
    const TestingMethod = () => {
        console.log("TestingMethod");
    };
    const TestingMethod2 = () => {
        console.log("TestingMethod2");
    };

	useEffect(() => {
		console.log("TestingComponent mounted");
		return () => {
			console.log("TestingComponent unmounted");
		};
	}, []);

    return {TestingMethod, TestingMethod2};
};

export default TestingComponent;
