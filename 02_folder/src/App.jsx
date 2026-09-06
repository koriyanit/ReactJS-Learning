import React from "react";
import Card from "./components/Card";
import "./App.css";



const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$46/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce",
    name: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bangalore, India"
  }
];




  return (
  <div className="container">
      {
        jobOpenings.map(function(ele, idx){
          console.log(idx);
          
          return <div key={idx}> <Card  
          logo= {ele.brandLogo}company={ele.name}datePosted= {ele.datePosted}post={ele.post}tag1={ele.tag1}tag2={ele.tag2}pay={ele.pay}location={ele.location} /></div>
        })
      }
  </div>
  );
};

export default App;
