import { getPanditSystemPrompt } from '@/lib/pandit-data';

export const runtime = 'edge'; // Optional: Use Edge runtime for lower latency if compatible, or standard Node

export async function POST(req: Request) {
    try {
        const { messages, panditId } = await req.json();

        // Validate inputs
        if (!messages || !Array.isArray(messages)) {
            return new Response('Invalid messages format', { status: 400 });
        }

        // Get the system prompt for the specific Pandit
        const systemPrompt = getPanditSystemPrompt(panditId || 'ai_pandit_1');

        // Construct the full message history for the AI
        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages
        ];

        // Get API Key from environment or use the provided SambaNova key
        const apiKey = process.env.SAMBANOVA_API_KEY || '4b9716cd-02f9-40d0-ab94-f13daa32ba5e';

        if (!apiKey) {
            return new Response('Missing API Key.', { status: 401 });
        }

        // Call SambaNova API (OpenAI Compatible)
        const response = await fetch('https://api.sambanova.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'ALLaM-7B-Instruct-preview',
                messages: apiMessages,
                stream: true, // Assuming SambaNova supports streaming
                temperature: 0.7,
                top_p: 0.1, // Using user's preference from script, though keeping temp conservative but creative
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('SambaNova API Error:', errorText);
            return new Response(`SambaNova API Error: ${response.statusText}`, { status: response.status });
        }

        // Return the stream directly
        return new Response(response.body, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
