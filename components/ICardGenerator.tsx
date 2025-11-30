
import React, { useState, useRef } from 'react';
import Cropper from 'cropperjs';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Upload, Scissors, Download, RefreshCw } from 'lucide-react';
import { Student } from '../types';

const ICardGenerator: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Form, 2: Crop
  const [formData, setFormData] = useState<Student>({
    name: '', class: '', fatherName: '', mobile: '', address: '', photo: ''
  });
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imageElement = useRef<HTMLImageElement>(null);
  const cropperRef = useRef<Cropper | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageLoad = () => {
    if (imageElement.current) {
      cropperRef.current = new Cropper(imageElement.current, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 0.8,
        background: false,
      });
    }
  };

  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.getCroppedCanvas({ width: 300, height: 300 });
      setFormData({ ...formData, photo: croppedCanvas.toDataURL() });
      cropperRef.current.destroy();
      cropperRef.current = null;
      setImageSrc(null);
      setStep(1); // Back to form with cropped image saved
    }
  };

  const generatePDF = () => {
    if (!formData.name || !formData.photo) {
      alert("Please fill name and upload a photo.");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc: any = new jsPDF();
    
    // Header
    doc.setFillColor(15, 23, 42); // Dark Blue
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(234, 179, 8); // Yellow
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("ARYA HIGHER SECONDARY SCHOOL", 105, 20, { align: 'center' });
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("Identity Card Generation Data", 105, 30, { align: 'center' });

    // Photo
    doc.addImage(formData.photo, 'JPEG', 15, 50, 50, 50);

    // Data Table
    // Use optional chaining or casting to avoid TS errors with the imported side-effect library
    if (doc.autoTable) {
      doc.autoTable({
        startY: 50,
        margin: { left: 75 },
        body: [
          ['Name', formData.name.toUpperCase()],
          ['Class', formData.class],
          ["Father's Name", formData.fatherName.toUpperCase()],
          ['Mobile', formData.mobile],
          ['Address', formData.address.toUpperCase()]
        ],
        theme: 'grid',
        styles: { fontSize: 12, cellPadding: 3 },
        columnStyles: { 0: { fontStyle: 'bold', width: 40 } }
      });
    } else {
        console.error("AutoTable plugin not found");
        alert("PDF Generation Error: Plugin not loaded. Please try again.");
    }

    doc.save(`${formData.name.replace(/\s/g, '_')}_ICard.pdf`);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
        <Upload size={24} /> Student I-Card Generator
      </h2>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Student Name" value={formData.name} onChange={handleInputChange} className="p-3 bg-gray-700 rounded-lg text-white w-full uppercase" />
            <select name="class" value={formData.class} onChange={handleInputChange} className="p-3 bg-gray-700 rounded-lg text-white w-full">
              <option value="">Select Class</option>
              {['PG', 'LKG', 'UKG', ...Array.from({ length: 12 }, (_, i) => `${i + 1}`)].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleInputChange} className="p-3 bg-gray-700 rounded-lg text-white w-full uppercase" />
            <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} className="p-3 bg-gray-700 rounded-lg text-white w-full" />
          </div>
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="p-3 bg-gray-700 rounded-lg text-white w-full uppercase h-24" />
          
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
              <Upload size={18} /> Upload Photo
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
            {formData.photo && <span className="text-green-400 text-sm">Photo Uploaded ✓</span>}
          </div>

          <button onClick={generatePDF} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2 mt-4">
            <Download size={20} /> Download PDF
          </button>
        </div>
      )}

      {step === 2 && imageSrc && (
        <div className="space-y-4">
          <div className="h-96 w-full bg-black rounded-lg overflow-hidden">
            <img ref={imageElement} src={imageSrc} alt="Crop" className="max-w-full" onLoad={onImageLoad} />
          </div>
          <div className="flex gap-4">
            <button onClick={handleCrop} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition flex items-center justify-center gap-2">
              <Scissors size={18} /> Crop & Save
            </button>
            <button onClick={() => { setStep(1); setImageSrc(null); if(cropperRef.current) cropperRef.current.destroy(); }} className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition flex items-center justify-center gap-2">
              <RefreshCw size={18} /> Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ICardGenerator;
