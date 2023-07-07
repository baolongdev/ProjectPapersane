import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

async function convertDocxToText(fileUrl: string) {
    try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        return new Promise<string>((resolve, reject) => {
            reader.onload = function () {
                const arrayBuffer = this.result as ArrayBuffer;
                const doc = new Docxtemplater().loadZip(new PizZip(arrayBuffer));
                doc.setData({}); // Optional: Pass data to replace placeholders in the document
                doc.render();
                const text = doc.getFullText();
                resolve(text);
            };

            reader.onerror = function (error) {
                reject(error);
            };

            reader.readAsArrayBuffer(blob);
        });
    } catch (error) {
        console.error('Error fetching or converting the document:', error);
        throw error;
    }
}

export default convertDocxToText;
