import React from 'react';

export default function Countries() {
  return (
    <>
      <select name="countries" id="countries" className="countries">
      <option value="" className="flex" >
      <div>Search your desired country</div>
      <div style= {{fontSize: '5rem'}}>🔍</div>
      </option>
        <option value="Afganistan">Afganistan</option>    
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
      </select>
    </>
  );
}
