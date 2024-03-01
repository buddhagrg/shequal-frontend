import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetails from "./pages/job-detail/JobDetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/postjob" element={<JobDetails />} /> */}
        <Route path="/viewjobdetail/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;