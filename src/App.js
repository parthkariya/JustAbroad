import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import LessonPage from "./pages/lessonPage/LessonPage";
import LiveClasses from "./pages/liveClasses/LiveClasses";
import Navbar from "./common/navbar/Navbar";
import Lessondetail from "./pages/lessondetail/Lessondetail";
import AvailableBatches from "./pages/availableBatches/AvailableBatches";
import Profile from "./pages/profile/Profile";
import SectionTest from "./pages/sectionTest/SectionTest";
import Dashboard from "./pages/dashboard/Dashboard";
import SupportPage from "./pages/supportPage/SupportPage";
import MockTest from "./pages/mockTest/MockTest";
import ProgressReport from "./pages/progressreport/ProgressReport";
import Assessment from "./pages/assessment/Assessment";
import ViewBatches from "./pages/viewBatches/ViewBatches";
import SectionViewReport from "./pages/sectionViewReport/SectionViewReport";
import SectionTest1 from "./pages/sectionTest1/SectionTest1";
import SwitchCourse from "./pages/switchcourse/SwitchCourse";
import GuideIelts from "./pages/guideIelts/GuideIelts";
import SecReadingTest1 from "./pages/secReadingTest1/SecReadingTest1";
import SecWritingTest1 from "./pages/secWritingTest1/SecWritingTest1";
import SecSpeakingTest1 from "./pages/secSpeakingTest1/SecSpeakingTest1";
import SecSpeakingStartTest from "./pages/secSpeakingStartTest/SecSpeakingStartTest";
import Notifications from "./pages/notifications/Notifications";
import SecListeningTestInstru from "./pages/secListeningTestInstru/SecListeningTestInstru";
import SecReadingTestInstru from "./pages/secReadingTestInstru/SecReadingTestInstru";
import SecWritingTestInstru from "./pages/secWritingTestInstru/SecWritingTestInstru";
import MockDemoTest from "./pages/mockDemoTest/MockDemoTest";
import Recommended_IELTS_Plans from "./pages/recommended_IELTS_Plans/Recommended_IELTS_Plans";
import Ielts_LessonDetails from "./pages/ielts_LessonDetails/Ielts_LessonDetails";
import { useEffect, useState } from "react";
import SectionReadingViewReport from "./pages/sectionReadingViewReport/SectionReadingViewReport";
import SectionWritingViewReport from "./pages/sectionWritingViewReport/SectionWritingViewReport";
import SectionSpeakingViewReport from "./pages/sectionSpeakingViewReport/SectionSpeakingViewReport";
import PteMockTest from "./pages/pteMockTest/PteMockTest";
import CurriculumPTE from "./pages/curriculumPTE/CurriculumPTE";
import MockWritingViewReport from "./pages/mockWritingViewReport/MockWritingViewReport";
import PteMockTest1 from "./pages/pteMockTest1/PteMockTest1";
import PteMockTest1Main from "./pages/pteMockTest1Main/PteMockTest1Main";
import PteMockTest2 from "./pages/pteMockTest2/PteMockTest2";
import PteMockTest2Main from "./pages/pteMockTest2Main/PteMockTest2Main";
import DragAndDropComponent from "./pages/dragAndDropComponent/DragAndDropComponent";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PteMockTest3Main from "./pages/pteMockTest3Main/PteMockTest3Main";
import CurrWeekSecClassTestThird from "./pages/currWeekSecClassTestThird/CurrWeekSecClassTestThird";
import CurrWeekFirstHomTestFirst from "./pages/currWeekFirstHomTestFirst/CurrWeekFirstHomTestFirst";
import CurrWeekWritingHomeworkTest from "./pages/currWeekWritingHomeworkTest/CurrWeekWritingHomeworkTest";
import CurrWeekListningHomeworkTest from "./pages/currWeekListningHomeworkTest/CurrWeekListningHomeworkTest";
import CurrWeekReadingHomeworkTest from "./pages/currWeekReadingHomeworkTest/CurrWeekReadingHomeworkTest";
import CurrWeekFirstClassTestFirst from "./pages/currweekfirstclasstestfirst/CurrWeekFirstClassTestFirst";
import CurriculumPage from "./pages/curriculumpage/CurriculumPage";
import CurrWeekSecClassTestSec from "./pages/currweeksecclasstestsec/CurrWeekSecClassTestSec";
import CurrWeekSecClassTestFourth from "./pages/currweeksecclasstestfourth/CurrWeekSecClassTestFourth";
import PteMockTest3 from "./pages/pteMockTest3/PteMockTest3";
import ModuleTest from "./pages/moduleTest/ModuleTest";
import ListenPart1 from "./pages/listenPart1/ListenPart1";
import ListenPart2 from "./pages/listenPart2/ListenPart2";
import ListenPart3 from "./pages/listenPart3/ListenPart3";
import ListenPart4 from "./pages/listenPart4/ListenPart4";
import ReadingPart1 from "./pages/readingPart1/ReadingPart1";
import ReadingPart2 from "./pages/readingPart2/ReadingPart2";
import ReadingPart3 from "./pages/readingPart3/ReadingPart3";
import WritingPart1 from "./pages/writingPart1/WritingPart1";
import WritingPart2 from "./pages/writingPart2/WritingPart2";
import SpeakingPart1 from "./pages/speakingPart1/SpeakingPart1";
import SectionalReport from "./pages/sectionalreport/SectionalReport";
// import ReorderableList from './ReorderableList'; // Adjust the path accordingly

function App() {
  const [getlogin, SetLogin] = useState("");
  const [getnavbar, SetNavBar] = useState("");
  const [getnavbarcourse, SetNavBarcourse] = useState("");
  useEffect(() => {
    getfuncation();
  }, []);

  const getfuncation = async () => {
    const ISLogin = await localStorage.getItem("is_login");
    SetLogin(JSON.parse(ISLogin));

    const navbar = await localStorage.getItem("navbartrue");
    SetNavBar(JSON.parse(navbar));

    const navbar2 = await localStorage.getItem("navbarcourse");
    SetNavBarcourse(JSON.parse(navbar2));
  };

  return (
    // <DndProvider backend={HTML5Backend}>
    <BrowserRouter basename="JustAbroad_front">
      {getnavbar === false ||
      (getnavbar === "false" && getnavbarcourse === "false") ||
      getnavbarcourse === false ? (
        <Navbar />
      ) : null}{" "}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Lesson" element={<LessonPage />}></Route>
        <Route path="/Lessondetail/:id" element={<Lessondetail />}></Route>
        <Route path="/LiveClasses" element={<LiveClasses />}></Route>
        <Route
          path="/AvailableBatches/:id"
          element={<AvailableBatches />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/SectionalTest" element={<SectionTest />}></Route>
        <Route path="/ModuleTest" element={<ModuleTest />}></Route>

        <Route path="/ModuleTest1" element={<SectionTest1 />}></Route>
        <Route path="/MockTest" element={<MockTest />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/SupportPage" element={<SupportPage />}></Route>
        <Route path="/ProgressReport" element={<ProgressReport />}></Route>
        <Route path="/Assessment/:id" element={<Assessment />}></Route>
        <Route path="/ViewBatches/:id" element={<ViewBatches />}></Route>
        <Route path="/SwitchCourse" element={<SwitchCourse />}></Route>
        <Route path="/GuideIelts/:id" element={<GuideIelts />}></Route>
        <Route path="/SecReadingTest1" element={<SecReadingTest1 />}></Route>
        <Route path="/SecWritingTest1" element={<SecWritingTest1 />}></Route>
        <Route path="/SecSpeakingTest1" element={<SecSpeakingTest1 />}></Route>
        <Route path="/Notifications" element={<Notifications />}></Route>
        <Route
          path="/SecSpeakingStartTest"
          element={<SecSpeakingStartTest />}></Route>
        <Route
          path="/SectionViewReport"
          element={<SectionViewReport />}></Route>
        <Route
          path="/SectionReadingViewReport"
          element={<SectionReadingViewReport />}></Route>
        <Route
          path="/SectionWritingViewReport"
          element={<SectionWritingViewReport />}></Route>
        <Route
          path="/SectionSpeakingViewReport"
          element={<SectionSpeakingViewReport />}></Route>
        <Route
          path="/SecListeningTestInstru"
          element={<SecListeningTestInstru />}></Route>
        <Route
          path="/SecReadingTestInstru"
          element={<SecReadingTestInstru />}></Route>
        <Route
          path="/SecWritingTestInstru"
          element={<SecWritingTestInstru />}></Route>
        <Route path="/MockDemoTest" element={<MockDemoTest />}></Route>
        <Route
          path="/RecommendedIELTSPlans"
          element={<Recommended_IELTS_Plans />}></Route>
        <Route
          path="/Ielts_LessonDetails/:id"
          element={<Ielts_LessonDetails />}></Route>
        <Route path="/PteMockTest" element={<PteMockTest />}></Route>
        <Route path="/CurriculumPTE" element={<CurriculumPTE />}></Route>
        <Route
          path="/MockWritingViewReport"
          element={<MockWritingViewReport />}></Route>
        <Route path="/PteMockTest1" element={<PteMockTest1 />}></Route>
        <Route path="/PteMockTest1Main" element={<PteMockTest1Main />}></Route>
        <Route path="/PteMockTest2" element={<PteMockTest2 />}></Route>
        <Route path="/PteMockTest2Main" element={<PteMockTest2Main />}></Route>
        <Route
          path="/DragAndDropComponent"
          element={<DragAndDropComponent />}></Route>
        <Route path="/PteMockTest3" element={<PteMockTest3 />}></Route>
        <Route path="/PteMockTest3Main" element={<PteMockTest3Main />}></Route>
        <Route path="/CurriculumPage" element={<CurriculumPage />}></Route>
        <Route
          path="/currweekfirstclasstestfirst"
          element={<CurrWeekFirstClassTestFirst />}></Route>
        <Route
          path="/CurrWeekFirstHomTestFirst"
          element={<CurrWeekFirstHomTestFirst />}></Route>
        <Route
          path="/currweeksecclasstestsec"
          element={<CurrWeekSecClassTestSec />}></Route>
        <Route
          path="/CurrWeekWritingHomeworkTest"
          element={<CurrWeekWritingHomeworkTest />}></Route>
        <Route
          path="/CurrWeekSecClassTestThird"
          element={<CurrWeekSecClassTestThird />}></Route>
        <Route
          path="/CurrWeekReadingHomeworkTest"
          element={<CurrWeekReadingHomeworkTest />}></Route>
        <Route
          path="/CurrWeekListningHomeworkTest"
          element={<CurrWeekListningHomeworkTest />}></Route>
        <Route
          path="/CurrWeekSecClassTestFourth"
          element={<CurrWeekSecClassTestFourth />}></Route>
        <Route path="/ListenPart1" element={<ListenPart1 />}></Route>
        <Route path="/ListenPart2" element={<ListenPart2 />}></Route>
        <Route path="/ListenPart3" element={<ListenPart3 />}></Route>
        <Route path="/ListenPart4" element={<ListenPart4 />}></Route>
        <Route path="/ReadingPart1" element={<ReadingPart1 />}></Route>
        <Route path="/ReadingPart2" element={<ReadingPart2 />}></Route>
        <Route path="/ReadingPart3" element={<ReadingPart3 />}></Route>
        <Route path="/WritingPart1" element={<WritingPart1 />}></Route>
        <Route path="/WritingPart2" element={<WritingPart2 />}></Route>
        <Route path="/SpeakingPart1" element={<SpeakingPart1 />}></Route>
        <Route path="/sectionalreport" element={<SectionalReport />}></Route>
        {/* <Route path="/drawable" element={<Drawable />}></Route> */}
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
    // </DndProvider>
  );
}

export default App;
