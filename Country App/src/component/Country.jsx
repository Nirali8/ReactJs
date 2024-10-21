import React,{useState,useEffect} from 'react'
import axios from "axios";
import CountryCard from './CountryCard';

const Country = () => {
 const [countries, setCountries] = useState([]);
 const [loading, setLoading] = useState(true);

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

 if (loading) {
   return <div className="text-center mt-20 text-lg">Loading countries...</div>;
 }

 return (
   <div className="container mx-auto p-4">
     <h1 className="text-4xl text-center font-bold mb-8">
       Country Information
     </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {countries.map((country) => (
         <CountryCard key={country.cca3} country={country} />
       ))}
     </div>
   </div>
 );
}

export default Country
