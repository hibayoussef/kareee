import AcademyAppConfig from "./academy/AcademyAppConfig";
import CalendarAppConfig from "./calendar/CalendarAppConfig";
import ChatAppConfig from "./chat/ChatAppConfig";
import AnalyticsDashboardAppConfig from "./dashboards/analytics/AnalyticsDashboardAppConfig";
import ProjectDashboardAppConfig from "./dashboards/project/ProjectDashboardAppConfig";
import FileManagerAppConfig from "./file-manager/FileManagerAppConfig";
import MailAppConfig from "./mail/MailAppConfig";
import NotesAppConfig from "./notes/NotesAppConfig";
import ScrumboardAppConfig from "./scrumboard/ScrumboardAppConfig";
import TodoAppConfig from "./todo/TodoAppConfig";
// import JobsAppConfig from "./jobs/JobsAppConfig";
import SalaryScalesAppConfig from "./salary-scales/SalaryScalesAppConfig";
import WorksAppConfig from './jobs/WorksAppConfig';

const appsConfigs = [
  
  AnalyticsDashboardAppConfig,
  ProjectDashboardAppConfig,
  MailAppConfig,
  TodoAppConfig,
  FileManagerAppConfig,
  WorksAppConfig,
  CalendarAppConfig,
  ChatAppConfig,
  ScrumboardAppConfig,
  AcademyAppConfig,
  NotesAppConfig,
  // JobsAppConfig,
  SalaryScalesAppConfig,
 
];

export default appsConfigs;
