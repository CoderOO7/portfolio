export async function* parseSSEStream(stream) {
  const reader = stream.pipeThrough(new TextDecoderStream()).getReader();

  let buffer = "";

  try {
    while (true) {
      const {value, done} = await reader.read();
      if (done) break;

      buffer += value;
      const events = buffer.split("\n\n"); // SSE events are separated by \n\n
      buffer = events.pop() ?? ""; // Keep the last incomplete event in the buffer

      for (const event of events) {
        const parsedEvent = parseSSEEvent(event);
        if (parsedEvent) {
          yield parsedEvent;
        }
      }
    }
  } catch (e) {
    console.error("Error on parsing SSE event ", e);
  } finally {
    reader.releaseLock();
  }
}

function parseSSEEvent(event) {
  const line = event.split("\n").find(line => line.startsWith("data:"));
  if (!line) return null;

  const jsonString = line.replace(/^data:\s*/, "").trim();
  if (!jsonString) return null;

  try {
    const parsedEvent = JSON.parse(jsonString);

    if (!isStreamEvent(parsedEvent)) {
      console.warn("Invalid stream event:", parsedEvent);
      return null;
    }

    return parsedEvent;
  } catch (e) {
    console.error("Failed to parse SSE event:", event, e);
    return null;
  }
}

function isStreamEvent(event) {
  if (!event || typeof event !== "object") {
    return false;
  }

  if (event.type === "done") {
    return true;
  }

  return event.type === "token" && typeof event.content === "string";
}
