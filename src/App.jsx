import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentsPage from "./Pages/StudentsPage";
import ActionPage from "./Pages/ActionPage";
import ContactPage from "./Pages/ContactPage";
import AboutHistoryPage from "./Pages/AboutHistoryPage";
import VisionAndMissionPage from "./Pages/VisionAndMissionPage";
import InstitutionSymbolPage from "./Pages/InstitutionSymbolPage";
import OrganizationAccreditationPage from "./Pages/OrganizationAccreditationPage";
import OrganizationStructurePage from "./Pages/OrganizationStructurePage";
import CooperationPage from "./Pages/CooperationPage";
import StudentAdmissionPage from "./Pages/StudentAdmissionPage";
import InformationForParentsPage from "./Pages/InformationForParentsPage";
import StudentAdmissionCalendarPage from "./Pages/StudentAdmissionCalendarPage";
import TextbookPage from "./Pages/TextbookPage";
import EducationRulePage from "./Pages/EducationRulePage";
import EducationCalendarPage from "./Pages/EducationCalendarPage";
import StudentArchievementPage from "./Pages/StudentAchievementPage";
import NoticePage from "./Pages/NoticePage";
import NewsPage from "./Pages/NewsPage";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ArtGroupPage from "./Pages/ArtGroupPage";
import RobotGroupPage from "./Pages/RobotGroupPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/ສະຖາບັນ">
          <AboutPage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ປະຫວັດຄວາມເປັນມາ">
          <AboutHistoryPage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ວິໄສທັດ-ພາລະກິດ-ແລະ-ພັນທະກິດ">
          <VisionAndMissionPage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ສັນຍະລັກຂອງສະຖາບັນ">
          <InstitutionSymbolPage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ການຮັບຮອງຈາກອົງການຈັດຕັ້ງລັດ">
          <OrganizationAccreditationPage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ໂຄງປະກອບກົງຈັກການຈັດຕັ້ງການ">
          <OrganizationStructurePage />
        </Route>
        <Route exact path="/ສະຖາບັນ/ການຮ່ວມມື">
          <CooperationPage />
        </Route>

        <Route exact path="/ພາກວິຊາ-ແລະ-ຫຼັກສູດ">
          <CoursesPage />
        </Route>

        <Route exact path="/ການສະໝັກນັກສຶກສາ">
          <RegistrationPage />
        </Route>
        <Route exact path="/ການສະໝັກນັກສຶກສາ/ເງື່ອນໄຂການຮັບນັກສຶກສາ">
          <StudentAdmissionPage />
        </Route>
        <Route exact path="/ການສະໝັກນັກສຶກສາ/ຂໍ້ມູນສຳລັບຜູ້ປົກຄອງ">
          <InformationForParentsPage />
        </Route>
        <Route exact path="/ການສະໝັກນັກສຶກສາ/ປະຕິທິນຮັບນັກສຶກສາ">
          <StudentAdmissionCalendarPage />
        </Route>
        <Route exact path="/ການສະໝັກນັກສຶກສາ/ປື້ມແບບຮຽນ">
          <TextbookPage />
        </Route>

        <Route exact path="/ນັກສຶກສາ">
          <StudentsPage />
        </Route>
        <Route exact path="/ນັກສຶກສາ/ກົດລະບຽບການສຶກສາ">
          <EducationRulePage />
        </Route>
        <Route exact path="/ນັກສຶກສາ/ປະຕິທິນການສຶກສາ">
          <EducationCalendarPage />
        </Route>

        <Route exact path="/ການເຄື່ອນໄຫວ">
          <ActionPage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ຜົນງານນັກສຶກສາ">
          <StudentArchievementPage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ແຈ້ງການ">
          <NoticePage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ຂ່າວສານ">
          <NewsPage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ກິດຈະກຳ">
          <ActivitiesPage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ກຸ່ມສິນລະປະ">
          <ArtGroupPage />
        </Route>
        <Route exact path="/ການເຄື່ອນໄຫວ/ກຸ່ມຫຸ່ນຍົນ">
          <RobotGroupPage />
        </Route>

        <Route exact path="/ຕິດຕໍ່">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
