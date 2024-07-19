import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'
import Header from './Components/Header/Header'
import JobCard from './Components/JobCard/Jobs'
import jobData from './JobDummyData'
import { collection, query, orderBy,where, getDocs } from "firebase/firestore";
import { db } from './firebase.config'
import SearchBar from './Components/SearchDiv/Search'


  
function App() {
  const [jobs, setJobs] = useState([]);
  

  const fetchJobs = async() => {
    const jobsRef= query(collection(db, "jobs"));

    const q = query(jobsRef, orderBy("postedOn","desc"));// code to order the data
    const req = await getDocs(q);
    const tempJobs = [];
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
 }



  // code to custom fetch data
  const fetchJobsCustom = async(jobCriteria) => {
    const jobsRef= query(collection(db, "jobs"));
    const q = query(jobsRef,where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title) ,where("experience", "==", jobCriteria.experience) ,where("location", "==", jobCriteria.location),orderBy("postedOn","desc"));// code to order the data
    const req = await getDocs(q);
    const tempJobs = [];
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

useEffect(() => {
fetchJobs()
},[])



  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Header/>
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {jobs.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
      <Value/>
      <Footer/>
  
    </div>

  )
}

export default App
