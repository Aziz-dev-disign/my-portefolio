import GitlabCalendar from "gitlab-calendar";
import GitHubCalendar from 'react-github-calendar';
// import { GetDitlabCalendarData } from "../../hooks";
import { calendarData } from "./utilis";

const theme: any = {
  level0: '#161B22',
  level1: '#0e4429',
  level2: '#006d32',
  level3: '#26a641',
  level4: '#39d353',
};

const Gitlab = () => {
  // const { calendarData } = GetDitlabCalendarData("https://gitlab.com/users/keurdo/calendar.json");
  // const { calendarData } = GetDitlabCalendarData(import.meta.env.GITLAB_USER_URL_PATH);
  const getIdDocument = document.getElementById("gitlabCalendar");
  if (!getIdDocument) return null;
  // if (calendarData) {
  //   new GitlabCalendar(getIdDocument as HTMLElement, calendarData, {});
  // }
  // if (calendarData) {
  // }
  new GitlabCalendar(getIdDocument as HTMLElement, calendarData, {});
  return (
    <div
      id="gitlabCalendar"
      className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 my-6 bg-white w-10 h-6"
    >
      <GitHubCalendar
          username={"Aziz-dev-disign"}
          // theme={theme}
          // hideColorLegend
          // hideMonthLabels
        />
    </div>
  );
};

export default Gitlab;
