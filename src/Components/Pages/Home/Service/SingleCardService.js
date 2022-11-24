import React from 'react';
import { Link } from 'react-router-dom';
import FullWidthButton from '../../../../ReUseableComponents/Button/FullWidthButton';
import SmallFillButton from '../../../../ReUseableComponents/Button/SmallFillButton';

const SingleCardService = ({service}) => {
  const{categories_id
    , title, img, discription} = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{discription}</p>
        <div className="">
          <Link to={`/categories/${categories_id}`}>
            <FullWidthButton extraClass={''}>Select</FullWidthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCardService;