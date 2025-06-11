export async function sendContactEmail(data: { name: string; email: string; message: string }) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    return res.json();
} 