import React from "react";

const JobDetailPageJob = ({
  id,
  csa_number,
  syspal_number,
  order_number,
  quantity,
  description,
  quote,
  date_created,
  workshop_status,
  syspal_status,
  delivered,
  delivered_date,
  notes_count,
}) => {
  return (
    <>
      <p>{csa_number}</p>
      <p>{syspal_number}</p>
      <p>{order_number}</p>
      <p>{quantity}</p>
      <p>{description}</p>
      <p>{quote}</p>
      <p>{date_created}</p>
      <p>{workshop_status}</p>
      <p>{syspal_status}</p>
      <p>{delivered ? "yes" : "No"}</p>
      <p>{delivered_date ? delivered_date : "Not delivered"}</p>
      <p>{notes_count}</p>
    </>
  );
};

export default JobDetailPageJob;
