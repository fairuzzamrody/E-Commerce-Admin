import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function ContentLivePreviewARDataran() {
	const modelViewerRef = useRef(null);
	const [isAddingHotspot, setIsAddingHotspot] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [annotationText, setAnnotationText] = useState("");
	const [hotspotPosition, setHotspotPosition] = useState({ x: 0, y: 0, z: 0 });
	const [annotations, setAnnotations] = useState([]);
	const [showRangeInput, setShowRangeInput] = useState(false); // Added state for range input visibility
	// Mengatur nilai awal shadowIntensity menjadi 0
	const [shadowIntensity, setShadowIntensity] = useState(0);

	const addHotspot = (position) => {
    const modelViewer = modelViewerRef.current;
    const hotspotId = `hotspot-${Date.now()}`;

    // Membuat elemen div utama untuk hotspot dan anotasi dengan styling inline
    const hotspotWrapper = document.createElement("div");
    hotspotWrapper.slot = hotspotId;
    hotspotWrapper.dataset.position = `${position.x} ${position.y} ${position.z}`;
    hotspotWrapper.style.display = "flex";
    hotspotWrapper.style.alignItems = "center";
    hotspotWrapper.style.gap = "5px"; // Menetapkan jarak antara ikon dan card
    hotspotWrapper.style.cursor = "pointer"; // Menunjukkan interaktivitas

    // Menambahkan ikon ke dalam wrapper
    const iconHTML = '<i class="bi bi-circle-fill" style="font-size: 24px; color: #ffffff;"></i>';

    // Membuat card untuk teks anotasi dengan styling inline
    const cardStyle = "padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); font-size: 16px;";
    const annotationHTML = `<div style="${cardStyle}">${annotationText}</div>`;

    // Menggabungkan ikon dan anotasi dalam card di dalam wrapper
    hotspotWrapper.innerHTML = `${iconHTML} ${annotationHTML}`;

    // Menambahkan wrapper ke dalam modelViewer
    modelViewer.appendChild(hotspotWrapper);

    setAnnotations((prevAnnotations) => [
        ...prevAnnotations,
        { id: hotspotId, text: annotationText },
    ]);
    setAnnotationText("");
    setIsAddingHotspot(false);
};


	const removeAnnotation = (id) => {
		setAnnotations(annotations.filter((annotation) => annotation.id !== id));
		const modelViewer = modelViewerRef.current;
		const hotspotButton = modelViewer.querySelector(`button[slot="${id}"]`);
		if (hotspotButton) {
			modelViewer.removeChild(hotspotButton);
		}
		const hotspotDiv = modelViewer.querySelector(`div[slot="${id}"]`);
		if (hotspotDiv) {
			modelViewer.removeChild(hotspotDiv);
		}
	};

	const handleModelClick = (event) => {
		if (!isAddingHotspot) return;
		const position = { x: 0, y: 1, z: 0 };
		setHotspotPosition(position);
		setShowModal(true);
	};

	// Di dalam useEffect yang menambahkan event listener ke modelViewer
	useEffect(() => {
		const modelViewer = modelViewerRef.current;
		if (modelViewer) {
			const handleClick = (event) => {
				if (!isAddingHotspot) return;

				const rect = modelViewer.getBoundingClientRect();
				const x = event.clientX - rect.left;
				const y = event.clientY - rect.top;

				// Menggunakan fungsi modelViewer untuk menghitung posisi 3D dari titik klik
				const position = modelViewer.positionAndNormalFromPoint(x, y);

				if (position) {
					setHotspotPosition(position.position);
					setShowModal(true);
				}
			};

			modelViewer.addEventListener("click", handleClick);
			return () => modelViewer.removeEventListener("click", handleClick);
		}
	}, [isAddingHotspot]);

	useEffect(() => {
		// Memperbarui atribut shadow-intensity setiap kali nilai state shadowIntensity berubah
		if (modelViewerRef.current) {
			modelViewerRef.current.setAttribute(
				"shadow-intensity",
				shadowIntensity,
			);
		}
	}, [shadowIntensity]);

	const toggleRangeInputVisibility = () => {
		setShowRangeInput((prev) => !prev);
	};

	return (
		<div>
			<model-viewer
				ref={modelViewerRef}
				src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/LemariLaci5Susun.glb?v=1699907215280"
				ios-src=""
				skybox-image="https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791"
				// set shadow-intensity ke 0 terlebih dahulu
				shadow-intensity={shadowIntensity.toString()} // Memperbarui nilai shadow-intensity menggunakan state
				ar
				skybox-height="2.8m"
				max-camera-orbit="auto"
				camera-controls
				style={{ width: "100%", height: "400px" }}
			></model-viewer>
			<br/>
						<Button variant="primary" onClick={toggleRangeInputVisibility}>
				Atur intensitas bayangan objek 3D
			</Button>
			{showRangeInput && (
				<>
					<footer className="blockquote-footer mt-3">
						Bayangan ini akan tampil di Augmented Reality dan 3D
						interaktif di web.
					</footer>

					<input
						type="range"
						className="form-range mt-2"
						min="0"
						max="3"
						step="0.5"
						value={shadowIntensity}
						onChange={(e) => setShadowIntensity(e.target.value)}
					></input>
					<hr />
				</>
			)}

		
		</div>
	);
}

export default ContentLivePreviewARDataran;
