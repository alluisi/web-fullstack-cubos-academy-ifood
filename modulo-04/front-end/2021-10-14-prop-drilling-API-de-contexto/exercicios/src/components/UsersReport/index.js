import { useEffect, useState } from "react";
import useUsersList from '../../hooks/useUsersList';
import './styles.css';

const defaultReportsState = { usersCount: 0, ageMedia: 0 };

function UsersReport() {
  const { usersData } = useUsersList();
  const [reports, setReports] = useState(defaultReportsState);

  useEffect(() => {

    if (usersData.length) {
      const ages = usersData.length && usersData.reduce((acum, user) => {
        return acum + user.age
      }, 0);

      const localReports = { ...reports };

      localReports.usersCount = usersData.length;
      localReports.ageMedia = ages / usersData.length;

      setReports(localReports);
      return;
    }

    setReports(defaultReportsState);

  }, [usersData]);

  return (
    <div className="container-report">
      <div className="report-item">
        <span>Total de usuários:</span>
        <strong>{reports.usersCount}</strong>
      </div>
      <div className="report-item">
        <span>Média de idade:</span>
        <strong>{reports.ageMedia}</strong>
      </div>
    </div>
  );
}

export default UsersReport;