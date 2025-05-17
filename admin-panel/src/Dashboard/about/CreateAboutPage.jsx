import React, { useState } from 'react';
import axios from 'axios';

export default function UnifiedForm() {
  const [selectedSection, setSelectedSection] = useState('');
  const [aboutData, setAboutData] = useState({ title: '', heading: '', description: '' });
  const [aboutImages, setAboutImages] = useState([]);

  const [choiceData, setChoiceData] = useState({ title: '', headings: [] });
  const [choiceImage, setChoiceImage] = useState(null);

  const [offerData, setOfferData] = useState({ title: '', items: [{ text: '' }] });
  const [offerBackgroundImg, setOfferBackgroundImg] = useState(null);
  const [offerItemImages, setOfferItemImages] = useState([]);

  const [journeyData, setJourneyData] = useState({ heading: '', description: '', subSections: [{ title: '', content: '' }] });
  const [journeyBackgroundImg, setJourneyBackgroundImg] = useState(null);
  const [journeySubSectionImages, setJourneySubSectionImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      switch (selectedSection) {
        case 'about':
          const aboutForm = new FormData();
          aboutForm.append('title', aboutData.title);
          aboutForm.append('heading', aboutData.heading);
          aboutForm.append('description', aboutData.description);
          aboutImages.forEach(file => aboutForm.append('imgUrl', file));
          await axios.post('http://localhost:5000/api/about', aboutForm, { headers: { 'Content-Type': 'multipart/form-data' } });
          alert('About section submitted!');
          break;

        case 'choice':
          const choiceForm = new FormData();
          choiceForm.append('title', choiceData.title);
          choiceForm.append('headings', JSON.stringify(choiceData.headings));
          if (choiceImage) choiceForm.append('imgUrl', choiceImage);
          await axios.post('http://localhost:5000/api/choice', choiceForm, { headers: { 'Content-Type': 'multipart/form-data' } });
          alert('Choice section submitted!');
          break;

        case 'offer':
          const offerForm = new FormData();
          offerForm.append('title', offerData.title);
          offerForm.append('items', JSON.stringify(offerData.items));
          if (offerBackgroundImg) offerForm.append('backgroundImg', offerBackgroundImg);
          offerItemImages.forEach((file, index) => offerForm.append(`itemImgs_${index}`, file));
          await axios.post('http://localhost:5000/api/offer', offerForm, { headers: { 'Content-Type': 'multipart/form-data' } });
          alert('Offer section submitted!');
          break;

        case 'journey':
          const journeyForm = new FormData();
          journeyForm.append('heading', journeyData.heading);
          journeyForm.append('description', journeyData.description);
          journeyForm.append('subSections', JSON.stringify(journeyData.subSections));
          if (journeyBackgroundImg) journeyForm.append('backgroundImg', journeyBackgroundImg);
          journeySubSectionImages.forEach((images, index) => {
            images.forEach(img => journeyForm.append(`subSectionsImages_${index}`, img));
          });
          await axios.post('http://localhost:5000/api/journey', journeyForm, { headers: { 'Content-Type': 'multipart/form-data' } });
          alert('Journey section submitted!');
          break;

        default:
          alert('Please select a section to submit.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong during submission.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-8">
      <div>
        <label className="block text-lg font-medium mb-2">Select Section:</label>
        <select
          className="w-full border rounded px-4 py-2"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">-- Select Section --</option>
          <option value="about">About</option>
          <option value="choice">Choice</option>
          <option value="offer">Offer</option>
          <option value="journey">Journey</option>
        </select>
      </div>

      {selectedSection === 'about' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">About Section</h2>
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Title" value={aboutData.title} onChange={e => setAboutData({ ...aboutData, title: e.target.value })} />
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Heading" value={aboutData.heading} onChange={e => setAboutData({ ...aboutData, heading: e.target.value })} />
          <textarea className="w-full border rounded px-4 py-2" placeholder="Description" value={aboutData.description} onChange={e => setAboutData({ ...aboutData, description: e.target.value })}></textarea>
          <input className="w-full" type="file" multiple onChange={e => setAboutImages([...e.target.files])} />
        </div>
      )}

      {selectedSection === 'choice' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Choice Section</h2>
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Title" value={choiceData.title} onChange={e => setChoiceData({ ...choiceData, title: e.target.value })} />
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Headings (comma-separated)" onChange={e => setChoiceData({ ...choiceData, headings: e.target.value.split(',') })} />
          <input className="w-full" type="file" onChange={e => setChoiceImage(e.target.files[0])} />
        </div>
      )}

      {selectedSection === 'offer' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Offer Section</h2>
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Title" value={offerData.title} onChange={e => setOfferData({ ...offerData, title: e.target.value })} />
          <input className="w-full" type="file" onChange={e => setOfferBackgroundImg(e.target.files[0])} />
          {offerData.items.map((item, i) => (
            <div key={i}>
              <input className="w-full border rounded px-4 py-2" type="text" placeholder="Item Text" value={item.text} onChange={e => {
                const newItems = [...offerData.items];
                newItems[i].text = e.target.value;
                setOfferData({ ...offerData, items: newItems });
              }} />
              <input className="w-full" type="file" onChange={e => {
                const newImages = [...offerItemImages];
                newImages[i] = e.target.files[0];
                setOfferItemImages(newImages);
              }} />
            </div>
          ))}
        </div>
      )}

      {selectedSection === 'journey' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Journey Section</h2>
          <input className="w-full border rounded px-4 py-2" type="text" placeholder="Heading" value={journeyData.heading} onChange={e => setJourneyData({ ...journeyData, heading: e.target.value })} />
          <textarea className="w-full border rounded px-4 py-2" placeholder="Description" value={journeyData.description} onChange={e => setJourneyData({ ...journeyData, description: e.target.value })}></textarea>
          <input className="w-full" type="file" onChange={e => setJourneyBackgroundImg(e.target.files[0])} />
          {journeyData.subSections.map((sub, i) => (
            <div key={i}>
              <input className="w-full border rounded px-4 py-2" type="text" placeholder="Sub Title" value={sub.title} onChange={e => {
                const newSubs = [...journeyData.subSections];
                newSubs[i].title = e.target.value;
                setJourneyData({ ...journeyData, subSections: newSubs });
              }} />
              <textarea className="w-full border rounded px-4 py-2" placeholder="Sub Content" value={sub.content} onChange={e => {
                const newSubs = [...journeyData.subSections];
                newSubs[i].content = e.target.value;
                setJourneyData({ ...journeyData, subSections: newSubs });
              }} />
              <input className="w-full" type="file" multiple onChange={e => {
                const newImages = [...journeySubSectionImages];
                newImages[i] = Array.from(e.target.files);
                setJourneySubSectionImages(newImages);
              }} />
            </div>
          ))}
        </div>
      )}

      <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200">
        Submit {selectedSection ? selectedSection.toUpperCase() : 'Section'}
      </button>
    </form>
  );
}
