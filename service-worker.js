console.log("[sw] hello");

self.addEventListener("install", (_event) => {
	console.log("[sw] installed");
});

self.addEventListener("message", (event) => {
	const { type } = event.data ?? {};
	console.log("[sw] message:", type);

	switch (type) {
	case "previewPixels":
		event.source?.postMessage({
			type: "refreshPixelArt"
		});
		break;

	case "clearPixelPreview":
		break;

	case "paintPixels":
		break;

	case "unpaintPixels":
		break;

	default:
		console.log("[sw] unknown message", { type });
		break;
	}

	event.source?.postMessage({
		id: event.data?.id
	});
});
