import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ContentLivePreviewARDinding from './ContentLivePreviewARDinding';
import Contentloading from "../../../../Loaders/Contentloading";

function ContentaugmentedRealityDinding() {
    const [linkARAndroid, setLinkARAndroid] = useState('');
    const [linkARIOS, setLinkARIOS] = useState('');
    const [linkSkyBox, setLinkSkyBox] = useState('');
    const [showLivePreview, setShowLivePreview] = useState(false); // State untuk menampilkan Live Preview
    const [loading, setLoading] = useState(false); // State untuk menampilkan loading
  
    const handleLinkARAndroidChange = (e) => {
      setLinkARAndroid(e.target.value);
    };
  
    const handleLinkARIOSChange = (e) => {
      setLinkARIOS(e.target.value);
    };
  
    const handleLinkSkyBoxChange = (e) => {
      setLinkSkyBox(e.target.value);
    };
  
    const handleLivePreviewClick = () => {
      // Menampilkan loading selama 1 detik sebelum menampilkan Live Preview
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowLivePreview(!showLivePreview);
      }, 1000);
    };
  
    return (
      <div>
        <Form.Group controlId="linkARAndroid">
          <Form.Label>Link AR Android <b>(SRC)</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Link Untuk Android (Format GLB/GLBTF)*"
            value={linkARAndroid}
            onChange={handleLinkARAndroidChange}
            className="mb-3"
            required
          />
        </Form.Group>
        <Form.Group controlId="linkARIOS">
          <Form.Label>Link AR iOS <b>(IOS-SRC)</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Link Untuk iOS (Format USDZ)*"
            value={linkARIOS}
            onChange={handleLinkARIOSChange}
            className="mb-3"
            required
          />
        </Form.Group>
        <Form.Group controlId="linkSkyBox">
          <Form.Label>Link SkyBox <b>(opsional)</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan link asset SkyBox berformat .HDR (opsional)"
            value={linkSkyBox}
            onChange={handleLinkSkyBoxChange}
            className="mb-3"
          />
        </Form.Group>
       
        <br />
      
        <div className="d-flex justify-content-end mb-3">
				{/* Tombol Live Preview 3D */}
				<Button onClick={handleLivePreviewClick}>
					{showLivePreview
						? "Tutup Live Preview 3D"
						: "Lihat Live Preview 3D"}
				</Button>
				{loading && <Contentloading />}{" "}
				{/* Menampilkan loading jika loading bernilai true */}
			</div>
			{/* Tampilkan komponen ContentLivePreviewARDataran jika showLivePreview bernilai true */}
			{showLivePreview && <ContentLivePreviewARDinding />}
		</div>
    );
  }

export default ContentaugmentedRealityDinding