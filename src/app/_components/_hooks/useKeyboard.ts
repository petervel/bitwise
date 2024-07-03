import { DependencyList, useEffect } from "react";

export function useKeyboardShortcut(
	key: string,
	onKeyPressed: () => void,
	dependencies: DependencyList = []
) {
	useEffect(() => {
		function keyDownHandler(e: globalThis.KeyboardEvent) {
			if (e.key === key) {
				e.preventDefault();
				onKeyPressed();
			}
		}

		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, dependencies);
}
