import React from 'react'
import styles from '../../styles/JobDetailComments.module.css'

// component to render comment content gor jobs
const JobDetailComments = ({jobId, notesCount, profileId}) => {
  return (
    <>
    <h3>Notes {notesCount} job id={jobId}</h3>
    <p>{profileId}</p>
    </>
  )
}

export default JobDetailComments