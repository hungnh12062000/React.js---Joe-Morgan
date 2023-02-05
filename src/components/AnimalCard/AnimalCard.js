import React from 'react';

import PropTypes from 'prop-types';
import './AnimalCard.css';

import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard({
     name,
     size,
     ...props
     // additional,
     // diet,
     // scientificName,
     // showAdditional,
}) {

     return (
          <div className="animal-wrapper">
               {/* <button onClick={() => showAdditional(additional)}>More Info</button> */}

               <Card title="Animal" details={<AnimalDetails
                    {...props}
               />}>
                    <h3>{name}</h3>
                    <div>{size}kg</div>
               </Card>
          </div>
     );
}

AnimalCard.propTypes = {
     name: PropTypes.string.isRequired,
     size: PropTypes.number.isRequired,
     // additional: PropTypes.shape({
     //      link: PropTypes.string,
     //      notes: PropTypes.string
     // }),
     // diet: PropTypes.arrayOf(PropTypes.string).isRequired,
     // scientificName: PropTypes.string.isRequired,
     // showAdditional: PropTypes.func.isRequired,
}

// AnimalCard.defaultProps = {
//      additional: {
//           notes: 'No Additional Information'
//      }
// }