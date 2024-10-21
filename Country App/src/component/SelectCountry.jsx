import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const SelectCountry = () => {
   const [countries, setCountries] = useState([]);
   const [loading, setLoading] = useState(true);
   const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country

   useEffect(() => {
     axios
       .get("https://restcountries.com/v3.1/all")
       .then((response) => {
         setCountries(response.data);
         setLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
         setLoading(false);
       });
   }, []);

   // Handle dropdown change event
   const handleSelectChange = (e) => {
     setSelectedCountry(e.target.value);
   };

   if (loading) {
     return (
       <div className="text-center mt-20 text-lg">Loading countries...</div>
     );
   }

   // Filter selected country from the list
   const filteredCountries = selectedCountry
     ? countries.filter((country) => country.cca3 === selectedCountry)
     : countries;

   return (
     <div className="container mx-auto p-4">
       <h1 className="text-4xl text-center font-bold mb-8">
         Country Information
       </h1>

       {/* Country Dropdown */}
       <div className="mb-8 text-center">
         <select
           value={selectedCountry}
           onChange={handleSelectChange}
           className="p-2 border border-gray-300 rounded-lg"
         >
           <option value="">Select a country</option>
           {countries.map((country) => (
             <option key={country.cca3} value={country.cca3}>
               {country.name.common}
             </option>
           ))}
         </select>
         {selectedCountry && (
           <button
             onClick={() => setSelectedCountry("")}
             className="ml-4 p-2 bg-red-500 text-white rounded-lg"
           >
             Clear
           </button>
         )}
       </div>

       {/* Country Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredCountries.map((country) => (
           <CountryCard key={country.cca3} country={country} />
         ))}
       </div>
     </div>
   );
};

export default SelectCountry;
