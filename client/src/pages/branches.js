import React from "react";
import "../pages/branches.css";


const globalBranches = [
  { state: "California ", country: "USA", address: "Los angeles, California", head: "John Doe", pincode: "90012", mapLink: "https://www.google.com/maps/place/Los+Angeles,+California" },
  { state: "Ontario", country: "Canada", address: "Toronto, Ontario", head: "Emily White", pincode: "M5H 2N2", mapLink: "https://www.google.com/maps/place/Toronto,+Ontario" },
  { state: "Queensland", country: "Australia", address: "Brisbane, Queensland", head: "Liam Scott", pincode: "4000", mapLink: "https://www.google.com/maps/place/Brisbane,+Queensland" },
  { state: "Tokyo", country: "Japan", address: "Shibuya, Tokyo", head: "Hiroshi Tanaka", pincode: "150-0002", mapLink: "https://www.google.com/maps/place/Shibuya,+Tokyo" },
  { state: "Dubai", country: "UAE", address: "Dubai, UAE", head: "Omar Al-Farsi", pincode: "00000", mapLink: "https://www.google.com/maps/place/Dubai,+UAE" },
  { state: "London", country: "UK", address: "London, England", head: "William Smith", pincode: "SW1A 1AA", mapLink: "https://www.google.com/maps/place/London,+UK" },
  { state: "São Paulo", country: "Brazil", address: "São Paulo, Brazil", head: "Carlos Silva", pincode: "01000-000", mapLink: "https://www.google.com/maps/place/São+Paulo,+Brazil" },
  { state: "Moscow", country: "Russia", address: "Moscow, Russia", head: "Ivan Petrov", pincode: "101000", mapLink: "https://www.google.com/maps/place/Moscow,+Russia" },
  { state: "Seoul", country: "South Korea", address: "Seoul, South Korea", head: "Park Ji-Hoon", pincode: "04524", mapLink: "https://www.google.com/maps/place/Seoul,+South+Korea" },
  { state: "Singapore", country: "Singapore", address: "Singapore", head: "Rachel Tan", pincode: "048619", mapLink: "https://www.google.com/maps/place/Singapore" },
  { state: "Madrid", country: "Spain", address: "Madrid, Spain", head: "Alejandro Torres", pincode: "28001", mapLink: "https://www.google.com/maps/place/Madrid,+Spain" },
  { state: "Rome", country: "Italy", address: "Rome, Italy", head: "Marco Rossi", pincode: "00184", mapLink: "https://www.google.com/maps/place/Rome,+Italy" },
  { state: "Mexico City", country: "Mexico", address: "Mexico City, Mexico", head: "Jose Ramirez", pincode: "01000", mapLink: "https://www.google.com/maps/place/Mexico+City,+Mexico" },
  { state: "Jakarta", country: "Indonesia", address: "Jakarta, Indonesia", head: "Budi Santoso", pincode: "10110", mapLink: "https://www.google.com/maps/place/Jakarta,+Indonesia" },
  { state: "Bangkok", country: "Thailand", address: "Bangkok, Thailand", head: "Somchai Wong", pincode: "10100", mapLink: "https://www.google.com/maps/place/Bangkok,+Thailand" },
  { state: "Buenos Aires", country: "Argentina", address: "Buenos Aires, Argentina", head: "Javier Gonzalez", pincode: "C1001", mapLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina" }

];

const branches = [
  
    { state: "Andhra Pradesh", country: "India", address: "Vijayawada, Andhra Pradesh", head: "Ramesh Iyer", pincode: "520001", mapLink: "https://www.google.com/maps/place/Vijayawada,+Andhra+Pradesh" },
    { state: "Arunachal Pradesh", country: "India", address: "Itanagar, Arunachal Pradesh", head: "Tenzing Lama", pincode: "791111", mapLink: "https://www.google.com/maps/place/Itanagar,+Arunachal+Pradesh" },
    { state: "Assam", country: "India", address: "Guwahati, Assam", head: "Bhaskar Das", pincode: "781001", mapLink: "https://www.google.com/maps/place/Guwahati,+Assam" },
    { state: "Bihar", country: "India", address: "Patna, Bihar", head: "Manoj Kumar", pincode: "800001", mapLink: "https://www.google.com/maps/place/Patna,+Bihar" },
    { state: "Chhattisgarh", country: "India", address: "Raipur, Chhattisgarh", head: "Sunil Sharma", pincode: "492001", mapLink: "https://www.google.com/maps/place/Raipur,+Chhattisgarh" },
    { state: "Goa", country: "India", address: "Panaji, Goa", head: "Francis D'Souza", pincode: "403001", mapLink: "https://www.google.com/maps/place/Panaji,+Goa" },
    { state: "Gujarat", country: "India", address: "Ahmedabad, Gujarat", head: "Rajesh Mehta", pincode: "380001", mapLink: "https://www.google.com/maps/place/Ahmedabad,+Gujarat" },
    { state: "Haryana", country: "India", address: "Chandigarh, Haryana", head: "Amit Choudhary", pincode: "160001", mapLink: "https://www.google.com/maps/place/Chandigarh,+Haryana" },
    { state: "Himachal Pradesh", country: "India", address: "Shimla, Himachal Pradesh", head: "Devendra Rana", pincode: "171001", mapLink: "https://www.google.com/maps/place/Shimla,+Himachal+Pradesh" },
    { state: "Jharkhand", country: "India", address: "Ranchi, Jharkhand", head: "Suresh Kumar", pincode: "834001", mapLink: "https://www.google.com/maps/place/Ranchi,+Jharkhand" },
    { state: "Karnataka", country: "India", address: "Bangalore, Karnataka", head: "Vikram Reddy", pincode: "560001", mapLink: "https://www.google.com/maps/place/Bangalore,+Karnataka" },
    { state: "Kerala", country: "India", address: "Thiruvananthapuram, Kerala", head: "Anil Nair", pincode: "695001", mapLink: "https://www.google.com/maps/place/Thiruvananthapuram,+Kerala" },
    { state: "Madhya Pradesh", country: "India", address: "Bhopal, Madhya Pradesh", head: "Vivek Sharma", pincode: "462001", mapLink: "https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh" },
    { state: "Maharashtra", country: "India", address: "Mumbai, Maharashtra", head: "Sanjay Patil", pincode: "400001", mapLink: "https://www.google.com/maps/place/Mumbai,+Maharashtra" },
    { state: "Manipur", country: "India", address: "Imphal, Manipur", head: "Tomba Singh", pincode: "795001", mapLink: "https://www.google.com/maps/place/Imphal,+Manipur" },
    { state: "Meghalaya", country: "India", address: "Shillong, Meghalaya", head: "David Marak", pincode: "793001", mapLink: "https://www.google.com/maps/place/Shillong,+Meghalaya" },
    { state: "Mizoram", country: "India", address: "Aizawl, Mizoram", head: "Lalrinmawia", pincode: "796001", mapLink: "https://www.google.com/maps/place/Aizawl,+Mizoram" },
    { state: "Nagaland", country: "India", address: "Kohima, Nagaland", head: "Neiphiu Rio", pincode: "797001", mapLink: "https://www.google.com/maps/place/Kohima,+Nagaland" },
    { state: "Odisha", country: "India", address: "Bhubaneswar, Odisha", head: "Prakash Mohanty", pincode: "751001", mapLink: "https://www.google.com/maps/place/Bhubaneswar,+Odisha" },
    { state: "Punjab", country: "India", address: "Amritsar, Punjab", head: "Harpreet Singh", pincode: "143001", mapLink: "https://www.google.com/maps/place/Amritsar,+Punjab" },
    { state: "Rajasthan", country: "India", address: "Jaipur, Rajasthan", head: "Rohit Rathore", pincode: "302001", mapLink: "https://www.google.com/maps/place/Jaipur,+Rajasthan" },
    { state: "Sikkim", country: "India", address: "Gangtok, Sikkim", head: "Tenzing Namgyal", pincode: "737101", mapLink: "https://www.google.com/maps/place/Gangtok,+Sikkim" },
    { state: "Tamil Nadu", country: "India", address: "Chennai, Tamil Nadu", head: "Sundar Krishnan", pincode: "600001", mapLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu" },
    { state: "Telangana", country: "India", address: "Hyderabad, Telangana", head: "Anand Reddy", pincode: "500001", mapLink: "https://www.google.com/maps/place/Hyderabad,+Telangana" },
    { state: "Tripura", country: "India", address: "Agartala, Tripura", head: "Biplab Deb", pincode: "799001", mapLink: "https://www.google.com/maps/place/Agartala,+Tripura" },
    { state: "Uttar Pradesh", country: "India", address: "Lucknow, Uttar Pradesh", head: "Yash Sharma", pincode: "226001", mapLink: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh" },
    { state: "Uttarakhand", country: "India", address: "Dehradun, Uttarakhand", head: "Vikas Rawat", pincode: "248001", mapLink: "https://www.google.com/maps/place/Dehradun,+Uttarakhand" },
    { state: "West Bengal", country: "India", address: "Kolkata, West Bengal", head: "Sourav Chatterjee", pincode: "700001", mapLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal" },
    { state: "Delhi", country: "India", address: "New Delhi, Delhi", head: "Arun Verma", pincode: "110001", mapLink: "https://www.google.com/maps/place/New+Delhi,+Delhi" },
    { state: "Puducherry", country: "India", address: "Puducherry", head: "Selvan Kumar", pincode: "605001", mapLink: "https://www.google.com/maps/place/Puducherry" },
  ];
  

const Branches = () => {
  return (
    <div className="branches-container">
      
    <div className="branches-container" style={{ paddingTop: '3900px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">Our Branches</h1>
      
      <section>
        <h2 className="section-title">Global Branches</h2>
        <div className="branches-grid">
          {globalBranches.map((branch, index) => (
            <div key={index} className="branch-card" onClick={() => window.open(branch.mapLink, "_blank")}> 
              <h3>{branch.state}, {branch.country}</h3>
              <p><strong>Company:</strong> DigiWeb</p>
              <p><strong>Address:</strong> {branch.address}</p>
              <p><strong>Company Head:</strong> {branch.head}</p>
              <p><strong>Pincode:</strong> {branch.pincode}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">State Branches (India)</h2>
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card" onClick={() => window.open(branch.mapLink, "_blank")}> 
              <h3>{branch.state}, {branch.country}</h3>
              <p><strong>Company:</strong> DigiWeb</p>
              <p><strong>Address:</strong> {branch.address}</p>
              <p><strong>Company Head:</strong> {branch.head}</p>
              <p><strong>Pincode:</strong> {branch.pincode}</p>
            </div>
          ))}
        </div>
      </section>




    </div>
    </div>
  );
};

export default Branches;