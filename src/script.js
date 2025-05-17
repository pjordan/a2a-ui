document.getElementById('sendButton').addEventListener('click', async () => {
    const endpoint = document.getElementById('endpoint').value.trim();
    const msgType = document.getElementById('msgType').value.trim();
    const msgBody = document.getElementById('msgBody').value.trim();

    const responseEl = document.getElementById('response');
    responseEl.textContent = '';

    if (!endpoint || !msgType || !msgBody) {
        responseEl.textContent = 'Please fill in all fields.';
        return;
    }

    let body;
    try {
        body = JSON.parse(msgBody);
    } catch (e) {
        responseEl.textContent = 'Message body must be valid JSON.';
        return;
    }

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Message-Type': msgType
            },
            body: JSON.stringify(body)
        });

        const text = await res.text();
        responseEl.textContent = `Status: ${res.status}\n${text}`;
    } catch (err) {
        responseEl.textContent = `Error: ${err.message}`;
    }
});
