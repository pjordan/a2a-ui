# A2A Protocol Web UI

This repository provides a simple web interface for sending messages via the A2A (Agent-to-Agent) protocol.

## Usage

The `src` folder contains a static web page that can be served with any static file server. For example, using Python:

```bash
python3 -m http.server -d src 8080
```

Then open `http://localhost:8080` in a browser. Fill in the recipient endpoint, message type, and message body (as JSON), then click **Send**.

The UI will POST the JSON to the provided endpoint with an `X-Message-Type` header specifying the message type and display the response.

## Files

- `src/index.html` – Main HTML page
- `src/style.css` – Basic styling
- `src/script.js` – Minimal JavaScript logic to send requests

This is a minimal example meant for experimentation. Adjust to match your own A2A protocol usage.
