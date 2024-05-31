import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

import Contenttabelprodukflashsaledataran from "./Contenttabelprodukflashsaledataran";
import Contenttabelprodukflashsaledinding from "./Contenttabelprodukflashsaledinding";

function Contentmemilihprodukyangakandiflashsale() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  // Check if selectedCategory is not empty before rendering
  const isCategorySelected = selectedCategory !== "";

  // Check if selectedSubcategory is not empty before rendering
  const isSubcategorySelected = selectedSubcategory !== "";

  return (
    <div>
      <Card.Title style={{ marginTop: "-15px" }} />
      <Form>
        <Form.Group controlId="PilihKategorifurnitur" className="mb-3">
          <Form.Label>Pilih Kategori Furnitur</Form.Label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Silahkan Pilih Kategori
            </option>
            <option value="dataran">Kategori Dataran</option>
            <option value="dinding">Kategori Dinding</option>
            <option value="semua">Semua Kategori</option>
          </select>
        </Form.Group>

        {/* Render subcategory dropdowns conditionally */}
        {isCategorySelected && selectedCategory === "semua" && (
          <>
            <Form.Group controlId="PilihKategoriFurniturDataran">
              <Form.Label>Pilih Kategori Furnitur Dataran</Form.Label>
              <select className="form-select" aria-label="Default select example">
                <option value="silahkan_pilih" disabled>
                  Silahkan Pilih Kategori ...
                </option>
                <option value="kursi">Sofa</option>
                <option value="meja">Meja</option>
                <option value="sofa">Kursi</option>
              </select>
            </Form.Group>
            <Form.Group controlId="PilihKategoriFurniturDinding" className="mt-3">
              <Form.Label>Pilih Kategori Furnitur Dinding</Form.Label>
              <select className="form-select" aria-label="Default select example">
                <option value="silahkan_pilih" disabled>
                  Silahkan Pilih Kategori ...
                </option>
                <option value="kabinet">Kabinet Dinding</option>
                <option value="meja_dinding">Meja Dinding</option>
                <option value="lemari">Lemari Dinding</option>
              </select>
            </Form.Group>
          </>
        )}

        {isCategorySelected && selectedCategory !== "semua" && (
          <Form.Group controlId="PilihKategoriSpesifik">
            <Form.Label>
              Pilih Kategori Furnitur {selectedCategory === "dataran" ? "Dataran" : "Dinding"}
            </Form.Label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="" disabled>
                Silahkan Pilih Kategori ...
              </option>
              {selectedCategory === "dataran" && (
                <>
                  <option value="kursi">Sofa</option>
                  <option value="meja">Meja</option>
                  <option value="sofa">Kursi</option>
                </>
              )}
              {selectedCategory === "dinding" && (
                <>
                  <option value="kabinet">Kabinet Dinding</option>
                  <option value="meja_dinding">Meja Dinding</option>
                  <option value="lemari">Lemari Dinding</option>
                </>
              )}
            </select>
          </Form.Group>
        )}

        {/* Render the appropriate components based on selectedSubcategory */}
        {isSubcategorySelected && selectedCategory === "dataran" && (
          (selectedSubcategory === "sofa" ||
          selectedSubcategory === "meja" ||
          selectedSubcategory === "kursi") && (
            <Contenttabelprodukflashsaledataran />
          )
        )}
        {isSubcategorySelected && selectedCategory === "dinding" && (
          (selectedSubcategory === "kabinet" ||
          selectedSubcategory === "meja_dinding" ||
          selectedSubcategory === "lemari") && (
            <Contenttabelprodukflashsaledinding />
          )
        )}
        {isCategorySelected && selectedCategory === "semua" && (
          <>
            <Contenttabelprodukflashsaledataran />
            <Contenttabelprodukflashsaledinding />
          </>
        )}
      </Form>
    </div>
  );
}

export default Contentmemilihprodukyangakandiflashsale;
