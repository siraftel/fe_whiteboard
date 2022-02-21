import { Popover, PopoverBody } from "react-bootstrap";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";

export default function PopoverCardArchive() {
  return (
    <>
      <Popover id="popover-basic">
        <PopoverBody className={style.popover_archive_body}>
          Set Your Function Bro!!
        </PopoverBody>
      </Popover>
    </>
  );
}
