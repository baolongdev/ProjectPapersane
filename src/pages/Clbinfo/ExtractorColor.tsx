import React, { useEffect } from 'react';

async function ExtractorColor(imageUrl: string): Promise<{ R: number; G: number; B: number }> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (context) {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                context.drawImage(image, 0, 0);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                const length = data.length;

                let R = 0,
                    G = 0,
                    B = 0;
                let count = 0;

                for (let i = 0; i < length; i += 4) {
                    R += data[i];
                    G += data[i + 1];
                    B += data[i + 2];
                    count++;
                }

                R = ~~(R / count);
                G = ~~(G / count);
                B = ~~(B / count);

                resolve({ R, G, B });
            } else {
                reject(new Error("Could not get 2D context."));
            }
        };

        image.onerror = reject;
        image.src = imageUrl;
    });
}



export default ExtractorColor;
