import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetails from "./pages/job-detail/JobDetails";
import JobPost from "./pages/jobAddEdit/JobPost";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postjob" element={<JobPost />} />
        <Route path="/viewjobdetail/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;