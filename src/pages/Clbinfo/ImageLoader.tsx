import React, { useEffect, useState } from 'react';


const checkImageURL = async (url: string) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return url
        } else {
            return ""
        }
    } catch (error) {
        console.log('Error checking image URL:', error);
    }
};

const ImageLoader = ({ url, className, ref }: { url: string; className: string; ref?: React.Ref<HTMLImageElement> }) => {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        const loadImage = async () => {
            const result = await checkImageURL(url);
            setImageUrl(result);
        };

        loadImage();
    }, [url]);

    if (!imageUrl) {
        return null; // Render a placeholder or loading state if desired
    }

    return <img src={imageUrl} alt="" className={className} ref={ref} />;
};

export default ImageLoader;
