import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

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
} from "@app/features/notepad/screens/NotepadScreen/NotepadScreen.styles";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import NotepadSection from "@app/features/notepad/components/NotepadSection/NotepadSection";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { getListNotepads } from "@app/features/notepad/notepad";
import ImageSchedule from "@app/assets/images/schedule.png";
import IconClock from "@app/assets/images/icon-svg/icon-clock.svg?react";

const NotepadScreen: FC = () => {
  const dispatch = useAppDispatch();
  const listNotepads = useAppSelector(
    (state) => state.notepad.notepadData.list
  );
  const [isLoadingListNotepads, setIsLoadingListNotepads] =
    useState<boolean>(true);

  useEffect(() => {
    dispatch(getListNotepads())
      .then(unwrapResult)
      .finally(() => setIsLoadingListNotepads(false));
  }, [dispatch]);

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
          <WrapWeek>
            <ItemDay>
              <span className="day-name">Monday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Tuesday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Wednesday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Thursday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Friday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Saturday</span>
              <span className="day-number">21</span>
            </ItemDay>
            <ItemDay>
              <span className="day-name">Sunday</span>
              <span className="day-number">21</span>
            </ItemDay>
          </WrapWeek>

          {isLoadingListNotepads ? (
            // TODO: Loading
            <div>Loading...</div>
          ) : (
            <>
              {listNotepads?.map((item) => (
                <NotepadSection key={item.id} notepad={item} />
              ))}
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
