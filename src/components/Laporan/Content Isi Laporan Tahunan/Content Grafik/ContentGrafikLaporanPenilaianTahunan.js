import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ProgressBar, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function ContentGrafikLaporanPenilaianTahunan() {
  const chartRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("Harian");
  const [chartData, setChartData] = useState([2, 6, 8, 12, 21]);
  const averageRating = 4.5; // Ubah rata-rata rating sesuai dengan data Anda

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["1 Bintang", "2 Bintang", "3 Bintang", "4 Bintang", "5 Bintang"],
          datasets: [
            {
              label: "Jumlah Rating",
              data: chartData,
              borderColor: "rgba(44, 191, 245)",
              backgroundColor: "rgba(128, 212, 242)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartData]);

  const getStoreCondition = (averageRating) => {
    if (averageRating >= 4) {
      return "Sangat Baik";
    } else if (averageRating >= 3) {
      return "Baik";
    } else if (averageRating >= 2) {
      return "Cukup";
    } else if (averageRating >= 1) {
      return "Kurang";
    } else {
      return "Sangat Kurang";
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Ringkasan Kepuasan Pelanggan</Card.Title>
          <div
            className="chart-container"
            style={{ position: "relative", height: "100%" }}
          >
            <canvas ref={chartRef}></canvas>
          </div>
          <hr />
          <footer class="blockquote-footer mt-2">
            Warna pada grafik hanya berfungsi sebagai penanda untuk
            membedakan sebuah data dan tidak memiliki kaitan dengan
            aspek lainnya.
          </footer>
          <hr style={{ marginBottom: "-5px" }} />
          <Card.Title>Rangkuman</Card.Title>
          <div className="d-flex align-items-center">
            <h1 className="rating-label mr-2">{averageRating}</h1>
            <div className="rating-container">
              <Rating
                style={{ maxWidth: 160, width: "100%", marginTop: "-10px" }}
                readOnly
                orientation="horizontal"
                value={averageRating}
              />
            </div>
          </div>
          <span>Rating rata-rata saat ini.</span>
          <hr />
          <h5>
            <strong>Total 80 Penilaian, 30 Ulasan</strong>
          </h5>
          <div className="d-flex justify-content-between">
            <span>5 Bintang</span>
            <span>
              12 <span style={{ fontSize: "1rem" }} className="text-muted">Penilaian</span>, 8{" "}
              <span style={{ fontSize: "1rem" }} className="text-muted">
                Ulasan
              </span>
            </span>
          </div>
          <ProgressBar variant="primary" now={60} />

          <div className="d-flex justify-content-between mt-3">
            <span>4 Bintang</span>
            <span>
              12 <span style={{ fontSize: "1rem" }} className="text-muted">Penilaian</span>, 8{" "}
              <span style={{ fontSize: "1rem" }} className="text-muted">
                Ulasan
                <span style={{ fontSize: "0.8rem" }}></span>
              </span>
            </span>
          </div>
          <ProgressBar variant="primary" now={40} />

          <div className="d-flex justify-content-between mt-3">
            <span>3 Bintang</span>
            <span>
              12 <span style={{ fontSize: "1rem" }} className="text-muted">Penilaian</span>, 8{" "}
              <span style={{ fontSize: "1rem" }} className="text-muted">
                Ulasan
                <span style={{ fontSize: "0.8rem" }}></span>
              </span>
            </span>
          </div>
          <ProgressBar variant="primary" now={30} />

          <div className="d-flex justify-content-between mt-3">
            <span>2 Bintang</span>
            <span>
              12 <span style={{ fontSize: "1rem" }} className="text-muted">Penilaian</span>, 8{" "}
              <span style={{ fontSize: "1rem" }} className="text-muted">
                Ulasan
                <span style={{ fontSize: "0.8rem" }}></span>
              </span>
            </span>
          </div>
          <ProgressBar variant="primary" now={20} />

          <div className="d-flex justify-content-between mt-3">
            <span>1 Bintang</span>
            <span>
              12 <span style={{ fontSize: "1rem" }} className="text-muted">Penilaian</span>, 8{" "}
              <span style={{ fontSize: "1rem" }} className="text-muted">
                Ulasan
                <span style={{ fontSize: "0.8rem" }}></span>
              </span>
            </span>
          </div>
          <ProgressBar variant="primary" now={10} />
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContentGrafikLaporanPenilaianTahunan;
