import React from "react";

import ContentinformasiDataAdmin1 from "./ContentinformasiDataAdmin1";

function Detailakunadmin1() {
	const today = new Date();
	const currentMonth = today.toLocaleString("default", { month: "long" });
	const currentYear = today.getFullYear();
	const formattedDate = `${today.getDate()} ${currentMonth} ${currentYear}`;
  
  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Akun Admin 2</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail akun admin 2</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <ContentinformasiDataAdmin1 />

      </section>
    </div>
  );
}

export default Detailakunadmin1;
