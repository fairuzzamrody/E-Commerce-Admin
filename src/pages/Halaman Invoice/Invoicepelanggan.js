import React, { useState, useEffect } from 'react';
import Contentloading from '../../components/Loaders/Contentloading';
import Bodymaininvoicepelanggan from '../../components/Bodymainpage/Body Main Transaksi/Invoice Pelanggan/Bodymaininvoicepelanggan';

function Invoicepelanggan() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // Setelah 1.5 detik, loading selesai
      }, 1500);
    }, []);  
  return (
    <div>
    {loading ? (
      <Contentloading /> // Menampilkan loader selama loading = true
    ) : (
      <>

        <Bodymaininvoicepelanggan />

      </>
    )}
  </div>
  )
}

export default Invoicepelanggan