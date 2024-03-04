import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetails from "./pages/job-detail/JobDetails";
import JobPost from "./pages/jobAddEdit/JobPost";
import JobUpdate from "./pages/jobAddEdit/JobUpdate";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postjob" element={<JobPost />} />
        <Route path="/viewjobdetail/:id" element={<JobDetails />} />
        <Route path="/updatejob/:id" element={<JobUpdate />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;