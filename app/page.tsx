'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
    const [prompt, setPrompt] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const generateImage = async () => {
        try {
            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            })
            const data = await response.json()
            setImageUrl(data.imageUrl)
        } catch (error) {
            console.error('Error generating image:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">AI Image Generator</h1>
            <div className="flex space-x-2 mb-4">
                <Input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt"
                />
                <Button onClick={generateImage}>Generate</Button>
            </div>
            {imageUrl && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Generated Image:</h2>
                    <img src={imageUrl} alt="Generated" className="max-w-full h-auto" />
                </div>
            )}
        </div>
    )
}
