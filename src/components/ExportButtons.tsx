import React, { useState } from 'react';
import { FileText, Presentation, Loader2, Play } from 'lucide-react';
import { exportToPDF, exportToPowerPoint } from '@/utils/exportUtils';

interface ExportButtonsProps {
  onPlaySlideshow?: () => void;
  totalSlides?: number;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ onPlaySlideshow, totalSlides = 0 }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    if (totalSlides === 0) {
      alert('No slides available to export!');
      return;
    }
    
    setIsExporting(true);
    try {
      await exportToPDF();
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      alert('Error exporting to PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPowerPoint = async () => {
    alert('PowerPoint export is temporarily disabled due to browser compatibility issues. Please use PDF export instead.');
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {totalSlides > 0 && (
        <button
          onClick={onPlaySlideshow}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-sm"
        >
          <Play className="w-4 h-4" />
          Play Slideshow
        </button>
      )}
      
      <button
        onClick={handleExportPDF}
        disabled={isExporting || totalSlides === 0}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm"
        title={totalSlides === 0 ? "No slides available to export" : "Export slides as PDF"}
      >
        {isExporting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <FileText className="w-4 h-4" />
        )}
        Export PDF
      </button>
{/*       
      <button
        onClick={handleExportPowerPoint}
        disabled={true}
        className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed transition-colors flex items-center gap-2 text-sm"
        title="PowerPoint export temporarily disabled"
      >
        <Presentation className="w-4 h-4" />
        Export PPT (Soon)
      </button> */}
    </div>
  );
};

export default ExportButtons; 