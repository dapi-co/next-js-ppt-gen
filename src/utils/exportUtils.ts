import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

// Helper function to wait for a short delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Export all slides as PDF using html-to-image
export const exportToPDF = async () => {
  try {
    // Find all slide containers
    const slideElements = document.querySelectorAll('[data-slide-container]') as NodeListOf<HTMLElement>;
    
    if (slideElements.length === 0) {
      alert('No slides found to export!');
      return;
    }

    console.log(`Found ${slideElements.length} slides to export`);

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [960, 540]
    });

    let addedSlides = 0;

    // Process each slide with proper waiting
    for (let i = 0; i < slideElements.length; i++) {
      console.log(`Processing slide ${i + 1}...`);
      
      try {
        // Wait a bit before capturing to ensure rendering is complete
        await delay(500);
        
        const dataUrl = await toPng(slideElements[i], {
          width: 960,
          height: 540,
          backgroundColor: '#ffffff',
          pixelRatio: 2, // Higher resolution for better quality
          quality: 1,
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left',
            position: 'relative',
            display: 'block',
            margin: '0',
            padding: '0'
          },
          filter: (node) => {
            // Exclude elements with data-html2canvas-ignore or data-export-ignore
            if (node instanceof HTMLElement) {
              return !node.hasAttribute('data-html2canvas-ignore') && 
                     !node.hasAttribute('data-export-ignore');
            }
            return true;
          }
        });
        
        // Add new page for slides after the first one
        if (addedSlides > 0) {
          pdf.addPage();
        }
        
        // Add the image to the PDF - centered and properly sized
        pdf.addImage(dataUrl, 'PNG', 0, 0, 960, 540);
        addedSlides++;
        
        console.log(`Successfully added slide ${i + 1} to PDF`);
        
      } catch (error) {
        console.error(`Failed to process slide ${i + 1}:`, error);
        // Continue with other slides even if one fails
      }
    }
    
    if (addedSlides === 0) {
      alert('No slides could be exported!');
      return;
    }
    
    // Save the PDF
    pdf.save('presentation.pdf');
    console.log(`PDF export completed! ${addedSlides} slides exported.`);
    
  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  }
};

// Export current slide as PDF using html-to-image
export const exportCurrentSlideToPDF = async (slideIndex: number) => {
  try {
    const slideElements = document.querySelectorAll('[data-slide-container]') as NodeListOf<HTMLElement>;
    
    if (!slideElements[slideIndex]) {
      alert('Slide not found!');
      return;
    }

    console.log(`Exporting slide ${slideIndex + 1}...`);
    
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [960, 540]
    });

    // Wait a bit before capturing to ensure rendering is complete
    await delay(300);

    const dataUrl = await toPng(slideElements[slideIndex], {
      width: 960,
      height: 540,
      backgroundColor: '#ffffff',
      pixelRatio: 2, // Higher resolution for better quality
      quality: 1,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
        position: 'relative',
        display: 'block',
        margin: '0',
        padding: '0'
      },
      filter: (node) => {
        // Exclude elements with data-html2canvas-ignore or data-export-ignore
        if (node instanceof HTMLElement) {
          return !node.hasAttribute('data-html2canvas-ignore') && 
                 !node.hasAttribute('data-export-ignore');
        }
        return true;
      }
    });
    
    // Add the image to the PDF - centered and properly sized
    pdf.addImage(dataUrl, 'PNG', 0, 0, 960, 540);
    pdf.save(`slide-${slideIndex + 1}.pdf`);
    
    console.log(`Slide ${slideIndex + 1} exported successfully!`);
    
  } catch (error) {
    console.error(`Failed to export slide ${slideIndex + 1}:`, error);
    throw error;
  }
};

// PowerPoint export - temporarily disabled
export const exportToPowerPoint = async () => {
  throw new Error('PowerPoint export is temporarily disabled. Please use PDF export instead.');
}; 