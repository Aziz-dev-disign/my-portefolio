import axios from "axios";
import { useEffect, useState } from "react";

export const GetDitlabCalendarData = (gitlabUserUrlPath: string) => {
  const [calendarData, setCalendarData] = useState<Record<string, number>>();
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get(gitlabUserUrlPath);
        setCalendarData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error loading GITLAB Calendar data:', err);
      }
    };

    fetchCalendarData();
  }, [gitlabUserUrlPath]);

  return { calendarData };
};
