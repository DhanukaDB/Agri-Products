import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Link } from "react-router-dom";

export default function DailyDeliveryReport() {

 // const [servicesreports, setServicesreports] = useState([])
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
      const loadDelivery = async () => {
          setLoading(true);
          const response = await axios.get("http://localhost:5000/delivery");
          setDelivery(response.data);
          setLoading(false);
      }
      loadDelivery();
  }, []);
  useEffect(() => {
     function getServices() {
       axios.get(`http://localhost:5000/delivery`).then((res) => {
        setDelivery(res.data)
         //console.log(res.data)   
       }).catch((err) => {
         alert(err)
       })
     }
     getServices();
   }, [delivery])

   function createPdf  () {

    var doc = new jsPDF('portrait','px','a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc. autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(16);
            var fileTitle = "Services Report";
           

            doc.text(fileTitle, 40, 100);
           

            // Footer
            var pageSize = doc.internal.pageSize;
            //jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 760,
                theme: 'grid'
            });
    
            var str = "Page " + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);
            doc.text(str, data.settings.margin.left, pageHeight - 10);
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('servicesdetails.pdf'); //this downloads a copy of the pdf in your local instance.
};
return (
    <> <div className="reportBody">
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <div className="containerDetails">
    <hr />
            <center>
            <h1>Daily Services Reports</h1>
           </center>
            <hr />
 <input className="search1"
                style={{ width: "10%", height: "30px" }}
                type="text"
                placeholder="Province"
                onChange={(e) => setSearch(e.target.value)} />

      <table className="table table-bordered detailTable" id="my-table">
        <thead className="bg-dark text-light">
          <tr className="detailRaw">
          <th scope="col">ID</th>
          <th scope="col">Full Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Building Number </th>
          <th scope="col">Street</th>
          <th scope="col">City</th>
          <th scope="col">Province</th>
          <th scope="col">Date</th>
         
          </tr>
        </thead>

    

        {loading ? (
                            <button class="btn-btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                                Loading </button>
                        ) : (
                            delivery
                                .filter((value) => {
                                    if (search === "") {
                                        return value;
                                    } else if (
                                        value.province.includes(search.toUpperCase())
                                    ) {
                                        return value;
                                    }


                                }).map((servicesreports) =>
                                
       
          <tr>
            <td className="expenseTableData">{servicesreports._id}</td>
            <td className="expenseTableData">{servicesreports.fullname}</td>
            <td className="expenseTableData">{servicesreports.phoneno}</td>
            <td className="expenseTableData">{servicesreports.buildingNo}</td>
            <td className="expenseTableData">{servicesreports.street}</td>
            <td className="expenseTableData">{servicesreports.city}</td>
            <td className="expenseTableData">{servicesreports.province}</td>
            <td className="expenseTableData">{servicesreports.date}</td>
            
            </tr>
        ))}
        
</table>
      
      <center>
      <Link to={"/deliveryMailer"} class="btn btn-outline-success">
       Send Email
      </Link>


      &nbsp;&nbsp;
      <button type="button" class="btn btn-outline-primary" onClick={()=>createPdf()}>Download PDF</button> {'   '}

   
      <Link to={"/adminPanel"} class="btn btn-outline-secondary ">
       Admin Panel
      </Link>
      </center>
    </div>
    
    </div>
    </>
)
        
        }     