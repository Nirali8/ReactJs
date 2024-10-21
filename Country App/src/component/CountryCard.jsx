import React from "react";

const CountryCard = ({ country }) => {
  const languages = country.languages ? Object.values(country.languages) : [];
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="h-32 w-full object-cover mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Languages:</strong>{" "}
        {languages.length > 0 ? languages.join(", ") : "N/A"}
      </p>
    </div>
  );
};

export default CountryCard;
