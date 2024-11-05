import { FC } from "react";

import {
  SectionLeft,
  WrapNotepad,
  SectionRight,
  WrapWeek,
  ItemDay,
  BannerRemind,
  BannerRemindContent,
  Bookmark,
  TitleMarker,
  CurrentDate,
} from "@app/features/notepad/screens/NotepadScreen/NotepadScreen.styles";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import NotepadSection from "@app/features/notepad/components/NotepadSection/NotepadSection";
import ImageSchedule from "@app/assets/images/schedule.png";
import IconClock from "@app/assets/images/icon-svg/icon-clock.svg?react";
import getDaysOfWeek from "@app/helpers/get-day-of-week";

import { useGetListNotepadsQuery } from "../../notepad";
import { monthsName } from "@app/constants/app.constants";

const NotepadScreen: FC = () => {
  const { data, isLoading } = useGetListNotepadsQuery({ page: 1, perPage: 20 });

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <WrapNotepad>
      <SectionLeft>
        <ContentContainer title="My notepad">
          <BannerRemind>
            <BannerRemindContent>
              Good morning,
              <p>
                Remind yourself to study every day and write down what you have
                learned.
              </p>
              <p>
                Suggested class time:
                <span className="text-highlight">
                  05-06h am - hours per day.
                </span>
              </p>
            </BannerRemindContent>
            <img src={ImageSchedule} alt="schedule" />
          </BannerRemind>

          <CurrentDate>
            {monthsName[currentMonth]}, {currentYear}
          </CurrentDate>

          <WrapWeek>
            {getDaysOfWeek().map((day) => (
              <ItemDay key={day.dayName} className={day.active ? "active" : ""}>
                <span className="day-name">{day.dayName}</span>
                <span className="day-number">{day.dayNumber}</span>
              </ItemDay>
            ))}
          </WrapWeek>

          {isLoading ? (
            // TODO: Loading
            <div>Loading...</div>
          ) : (
            <>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <NotepadSection key={item.id} notepad={item} />
                ))
              ) : (
                <div>Empty</div>
              )}
            </>
          )}
        </ContentContainer>
      </SectionLeft>
      <SectionRight>
        <ContentContainer>
          <TitleMarker>The notes are of most interest to you</TitleMarker>
          <Bookmark $point={1}>
            <IconClock />
            <h3>50 động từ tiếng anh phổ biến</h3>
            <p>Note: Buổi tới học về từ vựng chủ đề phim ảnh</p>
          </Bookmark>

          <Bookmark $point={2}>
            <IconClock />
            <h3>Tài liệu cần thiết cho người mới học tiếng anh.</h3>
            <p>Note: Buổi tới học về từ vựng chủ đề phim ảnh</p>
          </Bookmark>

          <Bookmark $point={3}>
            <IconClock />
            <h3>Tài liệu cần thiết cho người mới học tiếng anh.</h3>
            <p>Note: Buổi tới học về từ vựng chủ đề phim ảnh</p>
          </Bookmark>
        </ContentContainer>
      </SectionRight>
    </WrapNotepad>
  );
};

export default NotepadScreen;
