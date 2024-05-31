import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContentLaporanPelangganTahunan from './OverView/ContentLaporanPelangganTahunan';
import ContentLaporanTerjualTahunan from './OverView/ContentLaporanTerjualTahunan';
import ContentLaporanJumlahTransaksiTahunan from './OverView/ContentLaporanJumlahTransaksiTahunan';
import ContentLaporanTransaksiLunasTahunan from './OverView/ContentLaporanTransaksiLunasTahunan';
import ContentLaporanTransaksiBelumDibayarTahunan from './OverView/ContentLaporanTransaksiBelumDibayarTahunan';
import ContentLaporanTransaksiDibatalkanTahunan from './OverView/ContentLaporanTransaksiDibatalkanTahunan';
import ContentLaporanTotalinvoiceTahunan from './OverView/ContentLaporanTotalinvoiceTahunan';
import Contentlaporanpendapatan from '../Content Isi Laporan Bulanan/Penghasilan/ContentlaporanpendapatanBulanan';
import ContentLaporanPenghasilanTahunan from './Content Penghasilan/ContentLaporanPenghasilanTahunan';
import ContentLaporanProdukTerlarisTahunan from './Content Produk Terlaris/ContentLaporanProdukTerlarisTahunan';
import ContentLaporanKategoriTerlarisTahunan from './Content Kategori Terlaris/ContentLaporanKategoriTerlarisTahunan';
import ContentGrafikLaporanPenilaianTahunan from './Content Grafik/ContentGrafikLaporanPenilaianTahunan';
import ContentlaporandatalengkapTahunan from './Content Laporan Lengkap Penjualan/ContentlaporandatalengkapTahunan';

function ContentMainisiLaporanTahunan() {
    return (
		<div>
			{/* sesuaikan dengan apa yang user pilih, waktu di bawah cuma data dummy  */}
			
			<section className="section dashboard">
				<Card.Title>Over View</Card.Title>

				<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							
							<ContentLaporanPelangganTahunan />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							<ContentLaporanTerjualTahunan />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<ContentLaporanJumlahTransaksiTahunan/>
						</div>
					</div>
				</div>

				<Row>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
                            <ContentLaporanTransaksiLunasTahunan />
						</div>
					</Col>
                    
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
                            <ContentLaporanTransaksiBelumDibayarTahunan />
						</div>
					</Col>
				</Row>
				<Row>
					
                    <Col>
                    <div className="card info-card customers-card">

                    <ContentLaporanTransaksiDibatalkanTahunan />
                    </div>
                    </Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
                            <ContentLaporanTotalinvoiceTahunan />
						</div>
					</Col>
				</Row>

				<Card.Title>Penghasilan</Card.Title>
                    <ContentLaporanPenghasilanTahunan />


                    <Card.Title>5 Produk Terlaris di Tahun 2023</Card.Title>

				<ContentLaporanProdukTerlarisTahunan />

				<Card.Title>Kategori Terlaris di Tahun 2023</Card.Title>

                <ContentLaporanKategoriTerlarisTahunan />

				
				<Card.Title>Grafik Penilaian di Tahun 2023</Card.Title>
				{/* <ContentlaporangrafikpenilaianBulanan /> */}
                <ContentGrafikLaporanPenilaianTahunan />

				<Card.Title>Data Lengkap Penjualan di Tahun 2023</Card.Title>
				{/* <ContentlapaorandatalengkapBulanan /> */}
                <ContentlaporandatalengkapTahunan />

				<div className="d-flex justify-content-between">
					{/* Use Link component to create a link */}
					
					<Link to="/Outputhasilprintlaporantahunan">
						<button className="btn btn-primary">
							Cetak Laporan
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default ContentMainisiLaporanTahunan